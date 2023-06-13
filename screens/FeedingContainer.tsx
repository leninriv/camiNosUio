import { FlatList, StyleSheet, View } from 'react-native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';

export default function FeedingContainer(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ['#4c669f', '#468499'],
            text: 'Organizaciones',
            route: 'FeedingTest'
        },
        {
            colors: ['#4c669f', '#468499'],
            text: 'Bancos de alimentos',
            route: 'FeedingTest'
        },
        {
            colors: ['#4c669f', '#468499'],
            text: 'Comedores comunitarios',
            route: 'FeedingTest'
        },
        {
            colors: ['#4c669f', '#468499'],
            text: 'Patronato',
            route: 'FeedingTest'
        }
    ]

    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"Alimentación"} backButton>
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
        backgroundColor: '#fff',
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
