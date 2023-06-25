import { FlatList, StyleSheet, View, Text } from 'react-native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';

export default function WhatIsContainer(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ['#0f8d47', '#192f6a'],
            text: 'Soy de Venezuela',
            route: 'RegularizationTest'
        },
        {
            colors: ['#0f8d47', '#192f6a'],
            text: 'Soy de Colombia',
            route: 'RegularizationTest'
        },
        {
            colors: ['#0f8d47', '#192f6a'],
            text: 'Otras nacionalidades',
            route: 'RegularizationTest'
        },
        {
            colors: ['#0f8d47', '#192f6a'],
            text: 'No tengo pasaporte',
            route: 'RegularizationTest'
        }
    ]

    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"¿Qué es camiNOS.uio?"}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Es una aplicación que facilita el ejercicio de derechos de las personas en situación de movilidad humana en Quito. Solo requiere de conexión a internet al momento de descargarla. En adelante tendrás acceso a todo el contenido que incluye información clave, rutas de protección de derechos y directorio de organizaciones sin necesidad de estar conectado a internet.
                </Text>
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
        paddingHorizontal: 15
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        // backgroundColor: 'transparent',
        fontSize: 30,
        // color: '#fff',
        textAlign: 'justify',
        justifyContent:'center'
    },
});
