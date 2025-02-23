import { FlatList, StyleSheet, Image, View, Text, Dimensions } from 'react-native';


import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';

export default function HomeScreen(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ["#7a1194",'#7a1194'],
            text: 'Violencia',
            route: 'Violence',
            iconName: 'hand-right'
        },
        {
            colors: ['white'],
            text: 'Salud integral',
            route: 'Health',
            iconName: 'fitness'
        },
        {
            colors: ['white'],
            text: 'Alimentacion',
            route: 'Feeding',
            iconName: 'fast-food'
        },
        {
            colors: ['white'],
            text: 'Documentos y denuncias',
            route: 'Documents',
            iconName: 'document-text'
        },
        {
            colors: ['white'],
            text: 'Habitar Quito',
            route: 'City',
            iconName: 'business'
        },
        {
            colors: ['white'],
            text: 'Inserción escolar',
            route: 'Scholar',
            iconName: 'school'
        },
        {
            colors: ['white'],
            text: 'Mis derechos',
            route: 'Rights',
            iconName: 'shield-checkmark'
        },
        {
            colors: ['white'],
            text: 'Regularización',
            route: 'Regularization',
            iconName: 'card'
        },
    ];

    const windowWidth = Dimensions.get('window').width;
    const hideIcons = windowWidth < 300;

    function wellcomeImage() {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 20 }} />
                <Image
                    style={styles.stretch}
                    source={require('../assets/images/camiNOS.png')}
                />
                <View style={{ height: 20 }} />
            </View>
        )
    };

    return (
        <MainLayout  {...props} headerTitle={"INICIO"}>
            <View style={styles.container}>
                <FlatList
                    data={buttons}
                    columnWrapperStyle={styles.row}
                    numColumns={2}
                    keyExtractor={(item: any) => item.text}
                    renderItem={(item: any) => <GradientButton style={styles.columButtonStyle} text={item.item.text} colors={item.item.colors} iconName={hideIcons ? null : item.item.iconName} onPres={() => { navigation.navigate(item.item.route) }} />}
                    ListFooterComponent={<GradientButton text={'Directorio'} colors={['white']} onPres={() => { navigation.navigate('Search') }} />}
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
        width: 200,
        height: 90,
        resizeMode: 'center',
        marginBottom: 15
    },
});
