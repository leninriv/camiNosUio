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

const ViolenceStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const InspectionTabBarOptions = {
    headerShown: false,
};

function ViolenceNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="ViolenceContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='ViolenceContainer' component={ViolenceContainer} />
            <ViolenceStack.Screen name='ViolenceTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function IntegralHealthNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="HealthContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='HealthContainer' component={HealthContainer} />
            <ViolenceStack.Screen name='HealthTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function FeedingNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="FeedingContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='FeedingContainer' component={FeedingContainer} />
            <ViolenceStack.Screen name='FeedingTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function DocumentsNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="DocumentsContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='DocumentsContainer' component={DocumentsContainer} />
            <ViolenceStack.Screen name='DocumentsTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function CityNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="CityContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='CityContainer' component={CityContainer} />
            <ViolenceStack.Screen name='CityTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function ScholarNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="ScholarContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='ScholarContainer' component={ScholarContainer} />
            <ViolenceStack.Screen name='ScholarTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function RightsNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="RightsContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='RightsContainer' component={RightsContainer} />
            <ViolenceStack.Screen name='RightsTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function RegularizationNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="RegularizationContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='RegularizationContainer' component={RegularizationContainer} />
            <ViolenceStack.Screen name='RegularizationTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function RightsProtectionNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="RightsProtectionContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='RightsProtectionContainer' component={RightsProtectionContainer} />
            <ViolenceStack.Screen name='RightsProtectionTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function InformationNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="InformationContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='InformationContainer' component={InformationContainer} />
            <ViolenceStack.Screen name='InformationTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function DirectoryNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="DirectoryContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='DirectoryContainer' component={DirectoryContainer} />
            <ViolenceStack.Screen name='DirectoryTest' component={TestScreen} />
        </ViolenceStack.Navigator>
    )
};

function SearchNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="SearchContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='SearchContainer' component={SearchContainer} />
            <ViolenceStack.Screen name='SearchTest' component={TestScreen} />
        </ViolenceStack.Navigator>
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
