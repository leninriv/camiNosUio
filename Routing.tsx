import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/Home';
import TestScreen from './screens/testScreen';
import DrawerMenuContent from './components/CustomDrawer';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routing() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <DrawerMenuContent {...props} />} >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Test" component={TestScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
