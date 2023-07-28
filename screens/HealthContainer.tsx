import { FlatList, StyleSheet, View } from 'react-native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';

export default function HealthContainer(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ['#d10074', '#192f6a'],
            text: 'Salud física',
            route: 'HealthTest'
        },
        {
            colors: ['#d10074', '#192f6a'],
            text: 'Salud mental',
            route: 'HealthTest'
        },
        {
            colors: ['#d10074', '#192f6a'],
            text: 'Salud sexual y reproductiva',
            route: 'HealthTest'
        },
        {
            colors: ['#d10074', '#192f6a'],
            text: 'VIH',
            route: 'HealthTest'
        },
        {
            colors: ['#d10074', '#192f6a'],
            text: 'Emergencias',
            route: 'HealthTest'
        },
    ]

    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"Salud Integral"} backButton>
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
