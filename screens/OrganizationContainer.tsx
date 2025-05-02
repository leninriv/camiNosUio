import { Image, StyleSheet, View, ScrollView, Linking } from 'react-native';
import { Text, Button } from '@rneui/themed';

import MainLayout from '../components/MainLayout';
import { useEffect } from 'react';

export default function OrganizationContainer(props: any) {

    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"Cuadrante Sur"}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imageContent}>
                        <Image
                            style={styles.stretch}
                            source={require('../assets/logo/logoCuadSur.png')}
                        />
                    </View>
                    <Text style={styles.text}>
                        Organización de la sociedad civil que busca impulsar el desarrollo social a través de proyectos, iniciativas e investigaciones que promuevan el ejercicio de derechos humanos y de la naturaleza, la justicia social, la democratización del conocimiento, la deliberación pública, la participación ciudadana y modelos innovadores de gestión organizacional.
                    </Text>
                    <View style={styles.space} />
                    <Button style={styles.button} title={'cuadrantesur.org'} color={'warning'} onPress={() => { Linking.openURL('https://cuadrantesur.org/') }} />
                </View>
            </ScrollView>
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
    imageContent: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 15
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        textAlign: 'justify',
        justifyContent: 'center',
        color: 'gray',
        fontSize: 20
    },
    stretch: {
        width: 150,
        height: 130,
        resizeMode: 'stretch',
    },
    space: {
        height: 20
    }
});
