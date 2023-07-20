import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import GlobalHeader from './Header'

export default function MainLayout(props: any) {
    return (
        <View style={{ flex: 1, backgroundColor: '#E9E9E9' }}>
            <GlobalHeader navigation={props.navigation} backButton={props.backButton} title={props.headerTitle} rightComponent={props.rightComponent} />
            <View style={{ flex: 1, padding: 5, backgroundColor: '#E9E9E9'  }}>
                {props.children}
            </View>
        </View>
    )
}