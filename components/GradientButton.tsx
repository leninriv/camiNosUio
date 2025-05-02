import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GradientButton(props: any) {
    const colors = props.colors?.length > 1 ? props.colors : ['#a1a1a1', '#4d4d4d'];
    const globalColor = ['white'];
    const iconName = props.iconName ?? '';
    const opacity = props.opacity;
    if (opacity && colors[0].length < 9) { colors[0] = colors[0] + 'cc'; colors[1] = colors[1] + 'cc'; }
    return <View style={[styles.container, props.style]}>
        {!!props.buttonTittle && <View>
            <Text style={styles.buttonTitle}>{props.buttonTittle}</Text>
            <View style={{ height: 10 }} />
        </View>}
        <TouchableOpacity onPress={props.onPres} activeOpacity={0.5}>
            <LinearGradient
                colors={colors}
                style={[styles.button, opacity ? styles.opacity : {}]}>
                {!!iconName && <Ionicons name={iconName} size={32} color={globalColor[0]} />}
                <Text style={[styles.text, { color: globalColor[0] }]}>{props.text}</Text>
            </LinearGradient>
        </TouchableOpacity>


    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    button: {
        alignItems: 'center',
        borderRadius: 5,
        height: 100,
        justifyContent: 'center',
        padding: 15,
        position: 'relative'

    },
    opacity: {
        // opacity: .8
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
    buttonTitle: {
        fontSize: 20
    }
});