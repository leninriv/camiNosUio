import { FlatList, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoScreenContainer from './InfoScreenContainer';
import SearchContainer from './SearchContainer';
import DirectoryViewScreen from './DirectoryViewScreen';
import React from 'react';

const InspectionTabBarOptions = {
    headerShown: false,
};

const Stack = createNativeStackNavigator();

export default function GlobalContainer(props: any) {
    const { navigation, route } = props;
    const { title, colors, buttons, modal } = route.params;

    useEffect(() => {
        // const routes = navigation.getState().routeNames;
        // console.log('routes', route.params);
    }, []);

    return (
        <View style={styles.subNavContainer}>
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={InspectionTabBarOptions} initialRouteName="initial">
                    {renderInitial(title, buttons, navigation, colors, modal)}
                    {renderDynamicScreens(navigation, returnLevelScreens(buttons), colors, modal)}
                    <Stack.Screen name='directory_result' component={SearchContainer} />
                    <Stack.Screen name="DirectoryView" component={DirectoryViewScreen} />
                    <Stack.Screen name='TagFiltering' component={SearchContainer} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const renderInitial = (title: string, buttons: any[], mainNav: any, colors: string[], modal: string) => {
    const item = {
        title: title,
        route: 'initial',
        isFirst: true,
        buttons,
        modal
    };
    return < Stack.Screen name={'initial'} component={ButtonListScreen} initialParams={{ item, colors, mainNav, modal }} />
}

const renderDynamicScreens = (mainNav: any, screensList: any[], colors: string[], modal: string) => {
    const routes: string[] = [];
    return screensList.map((item: any, index) => {
        if (routes.includes(item.route)) return;
        routes.push(item.route);
        return (<Stack.Screen key={index} name={item.route} component={item.screen ? InfoScreenContainer : ButtonListScreen} initialParams={{ item, colors, mainNav, modal }} />)
    });
}

function returnLevelScreens(screensList: any[]) {
    let screenArray: any[] = [];

    for (let screen of screensList) {
        if (screen.route === 'directory_result') continue;
        screen.route = screen.title;
        screenArray.push(screen);
        if (screen.buttons.length) {
            screenArray = screenArray.concat(returnLevelScreens(screen.buttons))
        }
    }
    return screenArray;
}

function ButtonListScreen(props: any) {
    const { navigation, route } = props;
    const { item, colors, mainNav, modal } = route.params;
    const org = item;

    useEffect(() => {
        console.log('route.name', org.modal);
        // console.log('route.params', modal);
    }, []);

    if (org.isFirst) props.navigation = mainNav;
    if (org.buttons?.length) org.buttons = org.buttons.filter((v: any, i: any, a: any) => a.findIndex((t: any) => (t.title === v.title)) === i);
    return <MainLayout  {...props} headerTitle={org.title} backButton>
        <View style={styles.container}>
            <FlatList
                data={org.buttons || []}
                style={{ width: '100%', paddingHorizontal: 20 }}
                keyExtractor={(item: any) => item.title}
                renderItem={(item: any) => <GradientButton style={styles.columButtonStyle} text={item.item.title} colors={colors} onPres={() => { navigation.navigate(item.item.route, { ...item.item.params }) }} />}
            />
        </View>
    </MainLayout>
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
    subNavContainer:
    {
        flex: 1,
    }
});