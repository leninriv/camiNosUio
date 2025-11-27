import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/Home';
import TestScreen from './screens/testScreen';
import DrawerMenuContent from './components/CustomDrawer';
import WhatIsContainer from './screens/WhatIs';
import OrganizationContainer from './screens/OrganizationContainer';
import SearchContainer from './screens/SearchContainer';
import DirectoryViewScreen from './screens/DirectoryViewScreen';
import GlobalContainer from './screens/GlobalContainer';

import { routes } from './routingStructure.json';
import PrivacyTermsContainer from './screens/PrivacyTermsContainer';

const GlobalStack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();

const InspectionTabBarOptions = {
    headerShown: false,
};

export const navigationRef = React.createRef();

export function mainNavigation(name: string, params?: any) {
    navigationRef.current?.navigate(name, params);
}

function SearchNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="SearchContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='SearchContainer' component={SearchContainer} />
            <GlobalStack.Screen name="DirectoryView" component={DirectoryViewScreen} />
            <GlobalStack.Screen name='TagFiltering' component={SearchContainer} />
        </GlobalStack.Navigator>
    )
};

export default function Routing() {
    // Connecting routes in common violence with rightsProtection
    const violenceRoutes: any = routes.violence;
    violenceRoutes.buttons.unshift(routes.rightsProtection.buttons[1]);
    violenceRoutes.buttons.unshift(routes.rightsProtection.buttons[0]);

    // Connecting routes in common scholar with rightsProtection
    const scholarRoutes: any = routes.scholar;
    scholarRoutes.buttons.push(routes.rightsProtection.buttons[2]);

    const rightsProtectionMenu: any = routes.rightsProtectionMenu;
    rightsProtectionMenu.buttons[0].buttons = violenceRoutes.buttons;

    rightsProtectionMenu.buttons[2].buttons = routes.regularization.buttons;
    rightsProtectionMenu.buttons[3].buttons = scholarRoutes.buttons;

    violenceRoutes.buttons[2].buttons = [...violenceRoutes.buttons[2].buttons, ...rightsProtectionMenu.buttons[0].buttons[0].buttons];
    violenceRoutes.buttons[2].buttons[1].buttonTittle = '';

    const healthRoutes: any = routes.health;

    healthRoutes.buttons[0].buttons[1].buttons = violenceRoutes.buttons;

    rightsProtectionMenu.buttons[1].buttons = healthRoutes.buttons;

    const regularizationLevel: any = routes.regularization_level;
    regularizationLevel.buttons[0].buttons = routes.regularization.buttons;

    return (
        <NavigationContainer ref={navigationRef}>
            <DrawerStack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <DrawerMenuContent {...props} />} >
                <DrawerStack.Screen name="Home" component={HomeScreen} />
                <DrawerStack.Screen name="WhatIs" component={WhatIsContainer} />
                <DrawerStack.Screen name="Organization" component={OrganizationContainer} />
                <DrawerStack.Screen name="PrivacyTerms" component={PrivacyTermsContainer} />
                <DrawerStack.Screen name="RightsProtection" component={GlobalContainer} initialParams={rightsProtectionMenu} />
                <DrawerStack.Screen name="Information" component={GlobalContainer} initialParams={routes.information} />
                <DrawerStack.Screen name="Directory" component={GlobalContainer} initialParams={routes.directory} />
                <DrawerStack.Screen name="Test" component={TestScreen} />
                <DrawerStack.Screen name="Violence" component={GlobalContainer} initialParams={violenceRoutes} />
                <DrawerStack.Screen name="Health" component={GlobalContainer} initialParams={healthRoutes} />
                <DrawerStack.Screen name="Feeding" component={GlobalContainer} initialParams={routes.feeding} />
                <DrawerStack.Screen name="Documents" component={GlobalContainer} initialParams={routes.documents} />
                <DrawerStack.Screen name="City" component={GlobalContainer} initialParams={routes.city} />
                <DrawerStack.Screen name="Scholar" component={GlobalContainer} initialParams={scholarRoutes} />
                <DrawerStack.Screen name="Rights" component={GlobalContainer} initialParams={routes.rights} />
                <DrawerStack.Screen name="Regularization" component={GlobalContainer} initialParams={routes.regularization} />
                <DrawerStack.Screen name="live_together" component={GlobalContainer} initialParams={routes.live_together} />
                <DrawerStack.Screen name="find_job" component={GlobalContainer} initialParams={routes.job_and_productivity} />
                <DrawerStack.Screen name="regularization_level" component={GlobalContainer} initialParams={regularizationLevel} />
                <DrawerStack.Screen name="Search" component={SearchNav} />
            </DrawerStack.Navigator>
        </NavigationContainer>
    );
}
