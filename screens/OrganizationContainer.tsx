import { FlatList, StyleSheet, View, Text } from 'react-native';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';
import { useEffect } from 'react';

export default function OrganizationContainer(props: any) {

    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"Cuadrante Sur"}>
            <View style={styles.container}>
                <Text style={styles.text}>
                Organización de la sociedad civil que busca impulsar el desarrollo social a través de proyectos, iniciativas e investigaciones que promuevan el ejercicio de derechos humanos y de la naturaleza, la justicia social, la democratización del conocimiento, la deliberación pública, la participación ciudadana y modelos innovadores de gestión organizacional.
                </Text>
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
        paddingHorizontal: 15
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        // backgroundColor: 'transparent',
        fontSize: 30,
        // color: '#fff',
        textAlign: 'justify',
        justifyContent:'center'
    },
});
