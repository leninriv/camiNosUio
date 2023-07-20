import { FlatList, StyleSheet, Image, View, Text } from 'react-native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';

export default function HomeScreen(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ['#FF9800', '#F44336'],
            text: 'Violencia',
            route: 'Violence',
            iconName: 'heart'
        },
        {
            colors: ['#d10074', '#192f6a'],
            text: 'Salud integral',
            route: 'Health',
            iconName: 'fitness'
        },
        {
            colors: ['#4c669f', '#468499'],
            text: 'Alimentacion',
            route: 'Feeding',
            iconName: 'fast-food'
        },
        {
            colors: ['#0f8d47', '#192f6a'],
            text: 'Trámites y documentos',
            route: 'Documents',
            iconName: 'document-text'
        },
        {
            colors: ['#4c669f', '#192f6a'],
            text: 'Habitar Quito',
            route: 'City',
            iconName: 'business'
        },
        {
            colors: ['#4c669f', '#468499'],
            text: 'Inserción escolar',
            route: 'Scholar',
            iconName: 'school'
        },
        {
            colors: ['#4c669f', '#468499'],
            text: 'Mis derechos',
            route: 'Rights',
            iconName: 'shield-checkmark'
        },
        {
            colors: ['#4c669f', '#468499'],
            text: 'Regularización',
            route: 'Regularization',
            iconName: 'card'
        },
    ]

    function wellcomeImage() {
        return <View style={{ alignItems: 'center' }}>
            {/* <Text>Vamos a empezar!</Text> */}
            <Image
                style={styles.stretch}
                source={require('../assets/images/start.png')}
            />
        </View>
    };

    return (
        <MainLayout  {...props} headerTitle={"INICIO"}>
            <View style={styles.container}>
                <FlatList
                    data={buttons}
                    columnWrapperStyle={styles.row}
                    numColumns={2}
                    keyExtractor={(item: any) => item.text}
                    renderItem={(item: any) => <GradientButton style={styles.columButtonStyle} text={item.item.text} colors={item.item.colors} iconName={item.item.iconName} onPres={() => { navigation.navigate(item.item.route) }} />}
                    ListFooterComponent={<GradientButton text={'Super botton'} colors={['#395961', '#F44336']} onPres={() => { navigation.navigate('Test') }} />}
                    ListHeaderComponent={wellcomeImage()}
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
        width: '49%'
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 15
    },
    stretch: {
        width: 380,
        height: 200,
        resizeMode: 'stretch',
    },
});
