import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import TestScreen from './screens/testScreen';

const Stack = createNativeStackNavigator();

export default function Routing() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Test" component={TestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
