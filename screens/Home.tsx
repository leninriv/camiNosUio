import { FlatList, StyleSheet, Image, View, Text, Dimensions } from 'react-native';


import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useState } from 'react';
import { Dialog } from '@rneui/themed';

export default function HomeScreen(props: any) {
    const [modalVisible, setModalVisible] = useState(true);
    const { navigation } = props;
    const buttons = [
        {
            colors: ["#F79D2B", "#F79D2B"],
            text: 'Convivir',
            route: 'live_together',
            iconName: 'people-outline',
        },
        {
            colors: ["#7a1194", '#7a1194'],
            text: 'Violencia',
            route: 'Violence',
            iconName: 'hand-right',
        },
        {
            colors: ["#4CA247", "#4CA247"],
            text: 'Salud integral',
            route: 'Health',
            iconName: 'fitness'
        },
        {
            colors: ["#14A5B1", "#14A5B1"],
            text: 'Movilidad humana',
            route: 'regularization_level',
            iconName: 'earth'
        },
        {
            colors: ["#C52030", "#C52030"],
            text: 'Inserción escolar',
            route: 'Scholar',
            iconName: 'school'
        },
        {
            colors: ["#F79D2B", "#F79D2B"],
            text: 'Habitar Quito',
            route: 'City',
            iconName: 'business'
        },
        {
            colors: ["#13689E", "#13689E"],
            text: 'Documentos y denuncias',
            route: 'Documents',
            iconName: 'document-text'
        },
        {
            colors: ["#DD1868", "#DD1868"],
            text: 'Mis derechos',
            route: 'Rights',
            iconName: 'megaphone'
        },
        {
            colors: ["#DDA73B", "#DDA73B"],
            text: 'Alimentación',
            route: 'Feeding',
            iconName: 'nutrition'
        },
        {
            colors: ["#15496b", "#15496b"],
            text: 'Directorio',
            route: 'Directory',
            iconName: 'library'
        },
        {
            colors: [],
            text: 'Información Clave',
            route: 'Information',
            iconName: 'eye'
        },
        {
            colors: ["#b30040", "#b30040"],
            text: 'Empleo y productividad',
            route: 'find_job',
            iconName: 'build'
        },
    ];

    const windowWidth = Dimensions.get('window').width;
    const hideIcons = windowWidth < 300;

    const onToggleModal = () => {
        setModalVisible(!modalVisible)
    }

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
                    showsVerticalScrollIndicator={false}

                    data={buttons}
                    columnWrapperStyle={styles.row}
                    numColumns={2}
                    keyExtractor={(item: any) => item.text}
                    renderItem={(item: any) => <GradientButton style={styles.columButtonStyle} text={item.item.text} colors={item.item.colors} iconName={hideIcons ? null : item.item.iconName} onPres={() => { navigation.navigate(item.item.route) }} />}
                    // ListFooterComponent={
                    //     <View>
                    //         <GradientButton text={'Directorio'} colors={["#15496b", "#15496b"]} onPres={() => { navigation.navigate('Search') }} />
                    //         <View style={{ height: 30 }} />
                    //     </View>

                    // }
                    ListHeaderComponent={wellcomeImage()}
                />


                <Dialog
                    isVisible={modalVisible}
                    onBackdropPress={onToggleModal}
                >
                    <Dialog.Title title="¡Bienvenid@ a camiNOS!" />
                    <Text style={styles.popupText}>Esta aplicación es el resultado de un proceso participativo, pensada para acompañarte en tu interacción con Quito. Aquí encontrarás información clave, rutas de protección de derechos y un directorio de organizaciones, instituciones y servicios. La aplicación no consume datos. Solamente necesitarás conexión a internet para abrir enlaces externos.</Text>
                    <Text style={styles.popupText}>Tus camiNOS hacia una ciudad más accesible y segura empiezan aquí.</Text>
                </Dialog>

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
        width: 250,
        height: 110,
        resizeMode: 'center',
        marginBottom: 15
    },
    popupText: {
        textAlign: 'justify',
        fontSize: 17
    }
});
