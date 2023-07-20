import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GradientButton(props: any) {
    const colors = props.colors ?? ['#FF9800', '#F44336'];
    const iconName = props.iconName ?? '';
    return <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPres} activeOpacity={0.5}>
        <LinearGradient
            colors={colors}
            style={styles.button}>
            {!!iconName && <Ionicons name={iconName} size={32} color="white" />}
            <Text style={styles.text}>{props.text}</Text>
        </LinearGradient>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    button: {
        alignItems: 'center',
        borderRadius: 5,
        height: 100,
        justifyContent: 'center',
        padding: 15
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
});