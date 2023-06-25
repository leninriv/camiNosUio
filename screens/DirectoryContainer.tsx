import { FlatList, StyleSheet, View } from 'react-native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';

export default function InformationContainer(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ['#0f8d47', '#192f6a'],
            text: 'Organizaciones sociedad civil',
            route: 'DirectoryTest'
        },
        {
            colors: ['#0f8d47', '#192f6a'],
            text: 'Organizaciones públicas',
            route: 'DirectoryTest'
        },
        {
            colors: ['#0f8d47', '#192f6a'],
            text: 'Portal trámites ciudadanos',
            route: 'DirectoryTest'
        }
    ]

    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"Información clave"}>
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
    columButtonStyle: {
        width: '100%',
        marginBottom: 10
    },
});
