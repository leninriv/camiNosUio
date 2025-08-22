import { Image, StyleSheet, View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';


import MainLayout from '../components/MainLayout';
import { useEffect } from 'react';

export default function WhatIsContainer(props: any) {
    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"¿Qué es camiNOS.UIO?"}>
            <ScrollView>
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
            </ScrollView>
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
        textAlign: 'justify',
        justifyContent: 'center',
        color: 'gray',
        fontSize:20
    },
    stretch: {
        width: 250,
        height: 110,
        resizeMode: 'center',
    },
});
