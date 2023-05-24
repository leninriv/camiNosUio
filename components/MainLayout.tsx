import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import GlobalHeader from './Header'

export default function MainLayout(props: any) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <GlobalHeader navigation={props.navigation} backButton={props.backButton} title={props.headerTitle} rightComponent={props.rightComponent} />
            <View style={{ flex: 1, padding: 5 }}>
                {props.children}
            </View>
        </SafeAreaView>
    )
}