import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '@rneui/themed'; // https://reactnativeelements.com/

import Colors from '../constants/Colors';

function DrawerMenuIcon(data: any) {
    const { props } = data;
    return (
        <TouchableOpacity onPress={() => {props.navigation.toggleDrawer() }}>
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
                containerStyle={{ backgroundColor: Colors.primaryColor }}
                leftComponent={props.backButton ? < BackMenuIcon props={props}/> : <DrawerMenuIcon props={props} />}
                centerComponent={{ text: props.title, style: { color: '#fff', fontSize: 18 } }}
                rightComponent={props.rightComponent ? props.rightComponent : <View />}
            />
        </View>
    )
}