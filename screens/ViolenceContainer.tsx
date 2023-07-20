import { FlatList, StyleSheet, View } from 'react-native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';

export default function ViolenceContainer(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ['#FF9800', '#F44336'],
            text: 'Violencias basadas en género',
            route: 'ViolenceTest'
        },
        {
            colors: ['#FF9800', '#F44336'],
            text: 'Violencias contra niños, niñas y adolescentes',
            route: 'Test'
        },
        {
            colors: ['#FF9800', '#F44336'],
            text: 'Violencias contra personas LGBTI+',
            route: 'Test'
        },
        {
            colors: ['#FF9800', '#F44336'],
            text: 'Violencias contra adultos mayores',
            route: 'Test'
        },
        {
            colors: ['#FF9800', '#F44336'],
            text: 'Denuncias por robo',
            route: 'Test'
        },
        {
            colors: ['#FF9800', '#F44336'],
            text: 'Discriminación',
            route: 'Test'
        },
    ]

    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"Violencia"} backButton>
            <View style={styles.container}>
                <FlatList
                    data={buttons}
                    style={{ width: '100%', paddingHorizontal: 20 }}
                    keyExtractor={(item: any) => item.text}
                    renderItem={(item: any) => <GradientButton style={styles.columButtonStyle} text={item.item.text} colors={item.item.colors} onPres={() => { navigation.navigate(item.item.route) }} />}
                />

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
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    },
    columButtonStyle: {
        width: '100%',
        marginBottom: 10
    },
});
