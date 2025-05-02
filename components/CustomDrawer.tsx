import * as React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                {/* <DrawerItem label="Buscar" onPress={() => { navigation.navigate('Search'); }} /> */}
                <DrawerItem label="Acerca de Cuadrante Sur" onPress={() => { navigation.navigate('Organization'); }} />
                <DrawerItem label="Políticas de Uso y Privacidad" onPress={() => { navigation.navigate('PrivacyTerms'); }} />
            </DrawerContentScrollView>
            <TouchableOpacity style={styles.logoContent} onPress={()=>{Linking.openURL('https://cuadrantesur.org/')}}>
                <Text>Powered by:</Text>
                <Image
                    style={styles.stretch}
                    source={require('../assets/logo/logoCuadSur.png')}
                />
                <View style={{ height: 15 }} />
            </TouchableOpacity >

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
        width: 150,
        height: 100,
        resizeMode: 'stretch',
    },
});

