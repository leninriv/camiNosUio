import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';

export default function DrawerMenuContent(props: any) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} style={styles.container}>
                {/* <DrawerItemList {...props} /> */}
                <DrawerItem label="Inicio" onPress={() => { navigation.navigate('Home'); }} />
                <DrawerItem label="¿Qué es camiNOS.uio?" onPress={() => { navigation.navigate('WhatIs'); }} />
                <DrawerItem label="Rutas de protección de derechos" onPress={() => { navigation.navigate('RightsProtection'); }} />
                <DrawerItem label="Información clave" onPress={() => { navigation.navigate('Information'); }} />
                <DrawerItem label="Directorio" onPress={() => { navigation.navigate('Directory'); }} />
                {/* <DrawerItem label="Mis favoritos" onPress={() => { }} /> */}
                <DrawerItem label="Buscar" onPress={() => { navigation.navigate('Search'); }} />
                <DrawerItem label="Acerca de Cuadrante Sur" onPress={() => { navigation.navigate('Organization'); }} />
            </DrawerContentScrollView>
            <View style={styles.logoContent}>
                <Text>Powered by:</Text>
                <Image
                    style={styles.stretch}
                    source={require('../assets/logo/logoCuadSur.png')}
                />
                <View style={{ height: 15 }} />
            </View >

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
    },
    logoContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    stretch: {
        width: 200,
        height: 150,
        resizeMode: 'stretch',
    },
});

