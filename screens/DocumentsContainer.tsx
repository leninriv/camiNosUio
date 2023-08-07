import { FlatList, StyleSheet, View } from 'react-native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';

export default function DocumentsContainer(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Documentos Ecuador',
            route: 'DocumentsTest'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Denuncia pérdida de documentos',
            route: 'DocumentsTest'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Trámites',
            route: 'DocumentsTest'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Asesoría legal',
            route: 'DocumentsTest'
        }
    ]

    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"Documentos y denuncias"} backButton>
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
