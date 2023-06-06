import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

export default function DrawerMenuContent(props: any) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} style={styles.container}>
                {/* <DrawerItemList {...props} /> */}
                <DrawerItem label="Derechos" onPress={() => { }} />
                <DrawerItem label="Rutas" onPress={() => { }} />
                <DrawerItem label="Instituciones" onPress={() => { }} />
                <DrawerItem label="Cuadrante Sur" onPress={() => { }} />
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

