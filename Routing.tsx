import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/Home';
import TestScreen from './screens/testScreen';
import DrawerMenuContent from './components/CustomDrawer';
import ViolenceContainer from './screens/ViolenceContainer';
import HealthContainer from './screens/HealthContainer';
import FeedingContainer from './screens/FeedingContainer';
import DocumentsContainer from './screens/DocumentsContainer';
import CityContainer from './screens/CityContainer';
import ScholarContainer from './screens/ScholarContainer';
import RightsContainer from './screens/RightsContainer';
import RegularizationContainer from './screens/RegularizationContainer';
import WhatIsContainer from './screens/WhatIs';
import RightsProtectionContainer from './screens/RightsProtectionContainer';
import InformationContainer from './screens/InformationContainer';
import DirectoryContainer from './screens/DirectoryContainer';
import OrganizationContainer from './screens/OrganizationContainer';
import SearchContainer from './screens/SearchContainer';
import DirectoryViewScreen from './screens/DirectoryViewScreen';

const GlobalStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const InspectionTabBarOptions = {
    headerShown: false,
};

function ViolenceNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="ViolenceContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='ViolenceContainer' component={ViolenceContainer} />
            <GlobalStack.Screen name='ViolenceTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
};

function IntegralHealthNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="HealthContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='HealthContainer' component={HealthContainer} />
            <GlobalStack.Screen name='HealthTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
};

function FeedingNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="FeedingContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='FeedingContainer' component={FeedingContainer} />
            <GlobalStack.Screen name='FeedingTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
};

function DocumentsNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="DocumentsContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='DocumentsContainer' component={DocumentsContainer} />
            <GlobalStack.Screen name='DocumentsTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
};

function CityNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="CityContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='CityContainer' component={CityContainer} />
            <GlobalStack.Screen name='CityTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
};

function ScholarNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="ScholarContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='ScholarContainer' component={ScholarContainer} />
            <GlobalStack.Screen name='ScholarTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
};

function RightsNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="RightsContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='RightsContainer' component={RightsContainer} />
            <GlobalStack.Screen name='RightsTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
};

function RegularizationNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="RegularizationContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='RegularizationContainer' component={RegularizationContainer} />
            <GlobalStack.Screen name='RegularizationTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
};

function RightsProtectionNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="RightsProtectionContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='RightsProtectionContainer' component={RightsProtectionContainer} />
            <GlobalStack.Screen name='RightsProtectionTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
};

function InformationNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="InformationContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='InformationContainer' component={InformationContainer} />
            <GlobalStack.Screen name='InformationTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
};

function DirectoryNav(props: any) {
    return (
        <GlobalStack.Navigator initialRouteName="DirectoryContainer" screenOptions={InspectionTabBarOptions}>
            <GlobalStack.Screen name='DirectoryContainer' component={DirectoryContainer} />
            <GlobalStack.Screen name='DirectoryTest' component={TestScreen} />
        </GlobalStack.Navigator>
    )
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
                <Drawer.Screen name="RightsProtection" component={RightsProtectionNav} />
                <Drawer.Screen name="Information" component={InformationNav} />
                <Drawer.Screen name="Directory" component={DirectoryNav} />
                <Drawer.Screen name="Test" component={TestScreen} />
                <Drawer.Screen name="Violence" component={ViolenceNav} />
                <Drawer.Screen name="Health" component={IntegralHealthNav} />
                <Drawer.Screen name="Feeding" component={FeedingNav} />
                <Drawer.Screen name="Documents" component={DocumentsNav} />
                <Drawer.Screen name="City" component={CityNav} />
                <Drawer.Screen name="Scholar" component={ScholarNav} />
                <Drawer.Screen name="Rights" component={RightsNav} />
                <Drawer.Screen name="Regularization" component={RegularizationNav} />
                <Drawer.Screen name="Search" component={SearchNav} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
