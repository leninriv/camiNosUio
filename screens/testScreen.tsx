import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainLayout from '../components/MainLayout';

export default function TestScreen(props: any) {
    const rigthIconRender = () => (
        <TouchableOpacity onPress={() => { }}>
            <Ionicons name="reload" size={32} color="white" />
        </TouchableOpacity>
    )
    return (
        <MainLayout  {...props} headerTitle={"CAMINOS"} rightComponent={rigthIconRender} backButton>
            <View style={styles.container}>
                <Text>this is the test Screen</Text>
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
});
