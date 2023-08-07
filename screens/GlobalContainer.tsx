import { FlatList, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const InspectionTabBarOptions = {
    headerShown: false,
};

const Stack = createNativeStackNavigator();

export default function GlobalContainer(props: any) {
    const { navigation, route } = props;
    const { title, colors, buttons } = route.params;

    useEffect(() => {

    }, []);

    return (
        <View style={styles.subNavContainer}>
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={InspectionTabBarOptions} initialRouteName="initial">
                    {renderInitial(title, buttons, navigation, colors)}
                    {renderDynamicScreens(navigation, returnLevelScreens(buttons), colors)}
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const renderInitial = (title: string, buttons: any[], mainNav: any, colors: string[]) => {
    const item = {
        title: title,
        route: 'initial',
        isFirst: true,
        buttons
    };
    return < Stack.Screen name={'initial'} component={ButtonListScreen} initialParams={{ item, colors, mainNav }} />
}

const renderDynamicScreens = (mainNav: any, screensList: any[], colors: string[]) => {
    return screensList.map((item: any, index) => <Stack.Screen key={index} name={item.route} component={ButtonListScreen} initialParams={{ item, colors, mainNav }} />);
}

function returnLevelScreens(screensList: any[]) {
    let screenArray: any[] = [];
    for (let screen of screensList) {
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
    const { item, colors, mainNav } = route.params;
    const org = item;
    if (org.isFirst) props.navigation = mainNav;
    return <MainLayout  {...props} headerTitle={org.title} backButton>
        <View style={styles.container}>
            <FlatList
                data={org.buttons || []}
                style={{ width: '100%', paddingHorizontal: 20 }}
                keyExtractor={(item: any) => item.text}
                renderItem={(item: any) => <GradientButton style={styles.columButtonStyle} text={item.item.title} colors={colors} onPres={() => { navigation.navigate(item.item.route) }} />}
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