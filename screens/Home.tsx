import { FlatList, StyleSheet, Image, View, Text } from 'react-native';


import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';

export default function HomeScreen(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Violencia',
            route: 'Violence',
            iconName: 'heart'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Salud integral',
            route: 'Health',
            iconName: 'fitness'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Alimentacion',
            route: 'Feeding',
            iconName: 'fast-food'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Documentos y denuncias',
            route: 'Documents',
            iconName: 'document-text'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Habitar Quito',
            route: 'City',
            iconName: 'business'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Inserción escolar',
            route: 'Scholar',
            iconName: 'school'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
            text: 'Mis derechos',
            route: 'Rights',
            iconName: 'shield-checkmark'
        },
        {
            colors: ['#a1a1a1', '#4d4d4d'],
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
                    // ListFooterComponent={<GradientButton text={'Super botton'} colors={['#395961', '#F44336']} onPres={() => { navigation.navigate('Test') }} />}
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
