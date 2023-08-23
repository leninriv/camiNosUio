import { Image, StyleSheet, View, Text } from 'react-native';

import MainLayout from '../components/MainLayout';
import { useEffect } from 'react';

export default function WhatIsContainer(props: any) {
    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"¿Qué es camiNOS.uio?"}>
            <View style={styles.container}>
                <View style={styles.imageContent}>
                    <Image
                        style={styles.stretch}
                        source={require('../assets/images/camiNOS.png')}
                    />
                </View>
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
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    imageContent: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 15
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
        justifyContent: 'center'
    },
    stretch: {
        width: 250,
        height: 130,
        resizeMode: 'stretch',
    },
});
