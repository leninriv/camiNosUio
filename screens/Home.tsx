import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import MainLayout from '../components/MainLayout';

export default function HomeScreen(props: any) {
    const { navigation } = props;
    return (
        <MainLayout  {...props} headerTitle={"INICIO"}>
            <View style={styles.container}>
                <Text>Home screen of the app</Text>
                <Button title="Navegar" onPress={() => { navigation.navigate('Test') }} />
                <LinearGradient
                    colors={['#FF9800', '#F44336']}
                    style={styles.button}>
                    <Text style={styles.text}>Gradient example</Text>
                </LinearGradient>
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
});
