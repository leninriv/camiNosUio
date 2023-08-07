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
        </GlobalStack.Navigator>
    )
};

export default function Routing() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <DrawerMenuContent {...props} />} >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="WhatIs" component={WhatIsContainer} />
                <Drawer.Screen name="Organization" component={OrganizationContainer} />
                <Drawer.Screen name="RightsProtection" component={GlobalContainer} initialParams={routes.rightsProtection} />
                <Drawer.Screen name="Information" component={GlobalContainer} initialParams={routes.information}/>
                <Drawer.Screen name="Directory" component={GlobalContainer} initialParams={routes.directory} />
                <Drawer.Screen name="Test" component={TestScreen} />
                <Drawer.Screen name="Violence" component={GlobalContainer} initialParams={routes.violence} />
                <Drawer.Screen name="Health" component={GlobalContainer} initialParams={routes.health}  />
                <Drawer.Screen name="Feeding" component={GlobalContainer} initialParams={routes.feeding} />
                <Drawer.Screen name="Documents" component={GlobalContainer} initialParams={routes.documents}/>
                <Drawer.Screen name="City" component={GlobalContainer} initialParams={routes.city} />
                <Drawer.Screen name="Scholar" component={GlobalContainer} initialParams={routes.scholar} />
                <Drawer.Screen name="Rights" component={GlobalContainer} initialParams={routes.rights} />
                <Drawer.Screen name="Regularization" component={GlobalContainer} initialParams={routes.regularization} />
                <Drawer.Screen name="Search" component={SearchNav} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
