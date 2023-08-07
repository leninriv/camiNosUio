import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '@rneui/themed'; // https://reactnativeelements.com/

import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

function DrawerMenuIcon(data: any) {
    const { props } = data;
    return (
        <TouchableOpacity onPress={() => { props.navigation.toggleDrawer() }}>
            <Ionicons name="ios-menu" size={32} color="white" />
        </TouchableOpacity>
    );
}

function BackMenuIcon(data: any) {
    const { props } = data;
    return (
        <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
            <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableOpacity>
    );
}

export default function GlobalHeader(props: any) {
    return (
        <View >
            <StatusBar style="auto" />
            <Header
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors: ['#a1a1a1', '#4d4d4d'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                containerStyle={{ backgroundColor: Colors.primaryColor }}
                leftComponent={props.backButton ? < BackMenuIcon props={props} /> : <DrawerMenuIcon props={props} />}
                centerComponent={{ text: props.title, style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                rightComponent={props.rightComponent ? props.rightComponent : <View />}
            />
        </View>
    )
}