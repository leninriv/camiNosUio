import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';

import MainLayout from '../components/MainLayout';
import { useEffect } from 'react';

export default function PrivacyTermsContainer(props: any) {
    useEffect(() => {
    }, []);
    return (
        <MainLayout  {...props} headerTitle={"Políticas de Uso y Privacidad"}>
            <ScrollView>
                <View style={styles.container}>
                    <Text h2>POLÍTICA DE PRIVACIDAD</Text>
                    <Text> Última actualización: 10/16/2023</Text>
                    <View style={{ height: 20 }} />
                    <Text h4 style={styles.h4Style}>Bienvenido a CaminosUio. Nos preocupamos profundamente por su privacidad y estamos comprometidos a proteger la información personal que comparte con nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información cuando utiliza nuestra aplicación.</Text>
                    <View style={{ height: 20 }} />

                    <Text h3 style={styles.h3Style}>- Información Personal</Text>
                    <Text h4 style={styles.h4Style}>CamiNos Uio está pensada esencialmente la protección de derechos de personas en situación de movilidad humana y vulnerabilidad razón por la cual no recopila ningún tipo de información.</Text>
                    <View style={{ height: 20 }} />
                    <Text h3 style={styles.h3Style}>- Datos de Uso</Text>
                    <Text h4 style={styles.h4Style}>La aplicación no necesita conexión a internet ni datos del dispositivo de ningún tipo, una vez instalada se puede hacer uso de todas sus características sin ningún tipo de conexión o uso de datos</Text>

                    <View style={{ height: 20 }} />
                    <Text h3 style={styles.h3Style}>- Cómo Utilizamos su Información</Text>
                    <Text h4 style={styles.h4Style}>CaminosUio no hace uso de la información de sus usuarios.</Text>

                    <View style={{ height: 20 }} />
                    <Text h3 style={styles.h3Style}>- Compartir su Información</Text>
                    <Text h4 style={styles.h4Style}>CaminosUio no hace uso de la información de sus usuarios</Text>

                    <View style={{ height: 20 }} />
                    <Text h3 style={styles.h3Style}>- Cookies y Tecnologías Similares</Text>
                    <Text h4 style={styles.h4Style}>CaminosUio no hace uso de la información de sus usuarios.</Text>

                    <View style={{ height: 20 }} />
                    <Text h3 style={styles.h3Style}>- Seguridad</Text>
                    <Text h4 style={styles.h4Style}>CaminosUio es una aplicación meramente informativa, no representa riesgos en la seguridad de su información ya que no recopila ningún tipo de datos del usuario, del dispositivo o de ubicación.</Text>

                    <View style={{ height: 20 }} />
                    <Text h3 style={styles.h3Style}>- Cambios en esta Política de Privacidad</Text>
                    <Text h4 style={styles.h4Style}>Cualquier cambio en las políticas de privacidad serán notificadas a través de las redes de la fundación cuadrante sur. Tener en cuenta que no se forzara la actualización en ningún dispositivo y sus versiones anteriores continuarán siendo 100% funcionales y seguras.</Text>

                    <View style={{ height: 20 }} />
                    <Text h3 style={styles.h3Style}>- Contactos</Text>
                    <Text h4 style={styles.h4Style}>Si tiene preguntas o inquietudes sobre nuestra política de privacidad, no dude en ponerse en contacto con nosotros en info@cuadrantesur.org.</Text>
                    <View style={{ height: 40 }} />
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
    h3Style: {
        textAlign: 'left',
        width: '100%',
        marginBottom: 10
    },
    h4Style: {
        textAlign: 'justify',
        justifyContent: 'center',
        color: 'gray'
    },
    text: {
        // backgroundColor: 'transparent',
        fontSize: 30,
        // color: '#fff',
        textAlign: 'justify',
        justifyContent: 'center'
    },
});
