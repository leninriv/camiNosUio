import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    useWindowDimensions,
    type ImageStyle,
    type LayoutChangeEvent,
} from 'react-native';
import Animated, {
    Easing,
    cancelAnimation,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withDecay,
    withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

type PinchOptions = {
    toScale: number;
    fromScale: number;
    origin: { x: number; y: number };
    delta: { x: number; y: number };
    offset: { x: number; y: number };
};

const pinchTransform = ({
    toScale,
    fromScale,
    delta,
    origin,
    offset,
}: PinchOptions) => {
    'worklet';

    const fromPinchX = -1 * (origin.x * fromScale - origin.x);
    const fromPinchY = -1 * (origin.y * fromScale - origin.y);
    const toPinchX = -1 * (origin.x * toScale - origin.x);
    const toPinchY = -1 * (origin.y * toScale - origin.y);

    const x = offset.x + toPinchX - fromPinchX + delta.x;
    const y = offset.y + toPinchY - fromPinchY + delta.y;
    return { x, y };
};

const useVector = (x: number, y?: number) => {
    const x1 = useSharedValue<number>(x);
    const y1 = useSharedValue<number>(y ?? x);

    return { x: x1, y: y1 };
};

const clamp = (lowerBound: number, upperBound: number, value: number) => {
    'worklet';
    return Math.max(lowerBound, Math.min(value, upperBound));
};

const friction = (fraction: number) => {
    'worklet';
    return 0.75 * Math.pow(1 - fraction * fraction, 2);
};

const IMAGE =
    'https://e0.pxfuel.com/wallpapers/322/848/desktop-wallpaper-fennec-fox-algeria-national-animal-desert-fox.jpg';

const config = { duration: 200, easing: Easing.linear };

export default function ZoomImageViewer() {
    const { width, height } = useWindowDimensions();
    const childWidth = useSharedValue<number>(1);
    const childHeight = useSharedValue<number>(1);

    const translate = useVector(0, 0);
    const offset = useVector(0, 0);
    const origin = useVector(0, 0);
    const scale = useSharedValue<number>(1);
    const scaleOffset = useSharedValue<number>(1);

    const initialFocal = useVector(0, 0);
    const currentFocal = useVector(0, 0);

    const boundaries = useDerivedValue(() => {
        const offsetX = Math.max(0, childWidth.value * scale.value - width) / 2;
        const offsetY = Math.max(0, childHeight.value * scale.value - height) / 2;

        return { x: offsetX, y: offsetY };
    }, [scale, childWidth, childHeight, width, height]);

    const measureChild = (e: LayoutChangeEvent) => {
        childWidth.value = e.nativeEvent.layout.width;
        childHeight.value = e.nativeEvent.layout.height;
    };

    const pinch = Gesture.Pinch()
        .onTouchesMove((e) => {
            if (e.numberOfTouches !== 2) return;

            const one = e.allTouches[0]!;
            const two = e.allTouches[1]!;
            currentFocal.x.value = (one.absoluteX + two.absoluteX) / 2;
            currentFocal.y.value = (one.absoluteY + two.absoluteY) / 2;
        })
        .onStart((e) => {
            initialFocal.x.value = currentFocal.x.value;
            initialFocal.y.value = currentFocal.y.value;

            origin.x.value = e.focalX / scale.value - childWidth.value / 2;
            origin.y.value = e.focalY / scale.value - childHeight.value / 2;

            offset.x.value = translate.x.value;
            offset.y.value = translate.y.value;
            scaleOffset.value = scale.value;
        })
        .onUpdate((e) => {
            const toScale = e.scale * scaleOffset.value;
            const deltaX = currentFocal.x.value - initialFocal.x.value;
            const deltaY = currentFocal.y.value - initialFocal.y.value;

            const { x: toX, y: toY } = pinchTransform({
                toScale: toScale,
                fromScale: scaleOffset.value,
                origin: { x: origin.x.value, y: origin.y.value },
                offset: { x: offset.x.value, y: offset.y.value },
                delta: { x: deltaX, y: deltaY },
            });

            const boundX = Math.max(0, childWidth.value * toScale - width) / 2;
            const boundY = Math.max(0, childHeight.value * toScale - height) / 2;

            translate.x.value = clamp(-1 * boundX, boundX, toX);
            translate.y.value = clamp(-1 * boundY, boundY, toY);
            scale.value = toScale;

            // console.log(translate.x.value, translate.y.value);
        })
        .onEnd(() => {
            if (scale.value < 1) {
                scale.value = withTiming(1);
                translate.x.value = withTiming(0);
                translate.y.value = withTiming(0);
            }
        });

    const isWithinBoundX = useSharedValue<boolean>(true);
    const isWithinBoundY = useSharedValue<boolean>(true);

    const pan = Gesture.Pan()
        .maxPointers(1)
        .onStart((_) => {
            cancelAnimation(translate.x);
            cancelAnimation(translate.y);

            offset.x.value = translate.x.value;
            offset.y.value = translate.y.value;
        })
        .onChange(({ translationX, translationY, changeX, changeY }) => {
            const toX = offset.x.value + translationX;
            const toY = offset.y.value + translationY;

            const { x: boundX, y: boundY } = boundaries.value;
            isWithinBoundX.value = toX >= -1 * boundX && toX <= boundX;
            isWithinBoundY.value = toY >= -1 * boundY && toY <= boundY;

            if (isWithinBoundX.value) {
                translate.x.value = clamp(-1 * boundX, boundX, toX);
            } else {
                if (childWidth.value * scale.value < width) {
                    translate.x.value = clamp(-1 * boundX, boundX, toX);
                } else {
                    const fraction = (Math.abs(toX) - boundX) / width;
                    const frictionX = friction(clamp(0, 1, fraction));
                    translate.x.value += changeX * frictionX;
                }
            }

            if (isWithinBoundY.value) {
                translate.y.value = clamp(-1 * boundY, boundY, toY);
            } else {
                if (childHeight.value * scale.value < height) {
                    translate.y.value = clamp(-1 * boundY, boundY, toY);
                } else {
                    const fraction = (Math.abs(toY) - boundY) / width;
                    const frictionY = friction(clamp(0, 1, fraction));
                    translate.y.value += changeY * frictionY;
                }
            }
        })
        .onEnd(({ velocityX, velocityY }) => {
            const { x: boundX, y: boundY } = boundaries.value;
            const toX = clamp(-1 * boundX, boundX, translate.x.value);
            const toY = clamp(-1 * boundY, boundY, translate.y.value);

            translate.x.value = isWithinBoundX.value
                ? withDecay({ velocity: velocityX / 2, clamp: [-1 * boundX, boundX] })
                : withTiming(toX, config);

            translate.y.value = isWithinBoundY.value
                ? withDecay({ velocity: velocityY / 2, clamp: [-1 * boundY, boundY] })
                : withTiming(toY, config);
        });

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .maxDuration(250)
        .onStart((_) => {
            offset.x.value = translate.x.value;
            offset.y.value = translate.y.value;
        })
        .onEnd((e) => {
            if (scale.value > 2) {
                translate.x.value = withTiming(0);
                translate.y.value = withTiming(0);
                scale.value = withTiming(1);
                return;
            }

            const orgnX = e.x - childWidth.value / 2;
            const orgnY = e.y - childHeight.value / 2;
            const highestScreenDimension = Math.max(width, height);
            const higheststImageDimension = Math.max(
                childWidth.value,
                childHeight.value
            );

            const tapOrigin = width > height ? orgnX : orgnY;
            const toScale =
                ((highestScreenDimension + Math.abs(tapOrigin)) /
                    higheststImageDimension) *
                2;

            const { x, y } = pinchTransform({
                fromScale: scale.value,
                toScale,
                origin: { x: orgnX, y: orgnY },
                offset: { x: offset.x.value, y: offset.y.value },
                delta: { x: 0, y: 0 },
            });

            const boundX = Math.max(0, (childWidth.value * toScale - width) / 2);
            const boundY = Math.max(0, (childHeight.value * toScale - height) / 2);

            translate.x.value = withTiming(clamp(-boundX, boundX, x));
            translate.y.value = withTiming(clamp(-boundY, boundY, y));
            scale.value = withTiming(toScale);
        });

    const detectorStyle = useAnimatedStyle(() => ({
        width: childWidth.value * scale.value,
        height: childHeight.value * scale.value,
        position: 'absolute',
        transform: [
            { translateX: translate.x.value },
            { translateY: translate.y.value },
        ],
    }));

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const imageStyle: ImageStyle = {
        width,
        height: width / (850 / 565),
    };

    return (
        <View style={styles.root}>
            <GestureDetector gesture={Gesture.Race(pan, pinch, doubleTap)}>
                <Animated.View style={[detectorStyle, styles.center]}>
                    <Animated.View style={animatedStyle} onLayout={measureChild}>
                        {/* Replace the image for any component you want */}
                        <Image
                            style={imageStyle}
                            // source={{ uri: IMAGE }}
                            source={require('../assets/images/mapaQuito.png')}
                            resizeMethod={'scale'}
                        />
                    </Animated.View>
                </Animated.View>
            </GestureDetector>
        </View>
    );

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});