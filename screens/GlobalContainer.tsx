import { FlatList, StyleSheet, View } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const InspectionTabBarOptions = {
    headerShown: false,
};

export default function GlobalContainer(props: any) {
    const { navigation } = props;
    const [ colors, title] = props.navigation.params;

    const buttons = [
        { title: 'titulo 1', route: 'title1', buttons: [] },
        { title: 'titulo 2', route: 'title2', buttons: [] },
        { title: 'titulo 3', route: 'title3', buttons: [] }
    ];


    const Stack = createNativeStackNavigator();
    const navigationRef = useNavigationContainerRef();

    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={title} backButton>
            <View style={styles.container}>
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator screenOptions={InspectionTabBarOptions}>
                        {
                            buttons.map(item => <Stack.Screen name={item.route} component={() => listScreen(navigationRef, buttons, colors)} />)
                        }

                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </MainLayout>
    );
}


function listScreen(navigation: any, routes: any[], colors: string[]) {
    return <FlatList
        data={routes}
        style={{ width: '100%', paddingHorizontal: 20 }}
        keyExtractor={(item: any) => item.text}
        renderItem={(item: any) => <GradientButton style={styles.columButtonStyle} text={item.item.text} colors={colors} onPres={() => { navigation.navigate('GlobalContainer', item.item.buttons) }} />}
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    },
    columButtonStyle: {
        width: '100%',
        marginBottom: 10
    },
});