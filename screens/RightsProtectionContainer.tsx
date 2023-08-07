import { FlatList, StyleSheet, View } from 'react-native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';

export default function RightsProtectionContainer(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Violencia basada en género',
            route: 'RightsProtectionTest'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Inserción escolar',
            route: 'RightsProtectionTest'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Niños, niñas y adolescentes',
            route: 'RightsProtectionTest'
        }
    ]

    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"Rutas de protección de derechos"}>
            <View style={styles.container}>
                <FlatList
                    data={buttons}
                    style={{ width: '100%', paddingHorizontal: 20 }}
                    keyExtractor={(item: any) => item.text}
                    renderItem={(item: any) => <GradientButton style={styles.columButtonStyle} text={item.item.text} colors={item.item.colors} onPres={() => { navigation.navigate(item.item.route) }} />}
                />

            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
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
    columButtonStyle: {
        width: '100%',
        marginBottom: 10
    },
});
