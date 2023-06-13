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

const ViolenceStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const InspectionTabBarOptions = {
    headerShown: false,
  };

function ViolenceNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="ViolenceContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='ViolenceContainer' component={ViolenceContainer}/>
            <ViolenceStack.Screen name='ViolenceTest' component={TestScreen}/>
        </ViolenceStack.Navigator>
    )
};

function IntegralHealthNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="HealthContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='HealthContainer' component={HealthContainer}/>
            <ViolenceStack.Screen name='HealthTest' component={TestScreen}/>
        </ViolenceStack.Navigator>
    )
};

function FeedingNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="FeedingContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='FeedingContainer' component={FeedingContainer}/>
            <ViolenceStack.Screen name='FeedingTest' component={TestScreen}/>
        </ViolenceStack.Navigator>
    )
};

function DocumentsNav(props: any) {
    return (
        <ViolenceStack.Navigator initialRouteName="DocumentsContainer" screenOptions={InspectionTabBarOptions}>
            <ViolenceStack.Screen name='DocumentsContainer' component={DocumentsContainer}/>
            <ViolenceStack.Screen name='DocumentsTest' component={TestScreen}/>
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
                <Drawer.Screen name="Test" component={TestScreen} />
                <Drawer.Screen name="Violence" component={ViolenceNav} />
                <Drawer.Screen name="Health" component={IntegralHealthNav} />
                <Drawer.Screen name="Feeding" component={FeedingNav} />
                <Drawer.Screen name="Documents" component={DocumentsNav} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
