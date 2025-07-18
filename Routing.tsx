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
const Drawer = createDrawerNavigator();

const InspectionTabBarOptions = {
    headerShown: false,
};

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

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <DrawerMenuContent {...props} />} >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="WhatIs" component={WhatIsContainer} />
                <Drawer.Screen name="Organization" component={OrganizationContainer} />
                <Drawer.Screen name="PrivacyTerms" component={PrivacyTermsContainer} />
                <Drawer.Screen name="RightsProtection" component={GlobalContainer} initialParams={rightsProtectionMenu} />
                <Drawer.Screen name="Information" component={GlobalContainer} initialParams={routes.information} />
                <Drawer.Screen name="Directory" component={GlobalContainer} initialParams={routes.directory} />
                <Drawer.Screen name="Test" component={TestScreen} />
                <Drawer.Screen name="Violence" component={GlobalContainer} initialParams={violenceRoutes} />
                <Drawer.Screen name="Health" component={GlobalContainer} initialParams={healthRoutes} />
                <Drawer.Screen name="Feeding" component={GlobalContainer} initialParams={routes.feeding} />
                <Drawer.Screen name="Documents" component={GlobalContainer} initialParams={routes.documents} />
                <Drawer.Screen name="City" component={GlobalContainer} initialParams={routes.city} />
                <Drawer.Screen name="Scholar" component={GlobalContainer} initialParams={scholarRoutes} />
                <Drawer.Screen name="Rights" component={GlobalContainer} initialParams={routes.rights} />
                <Drawer.Screen name="Regularization" component={GlobalContainer} initialParams={routes.regularization} />
                <Drawer.Screen name="Search" component={SearchNav} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
