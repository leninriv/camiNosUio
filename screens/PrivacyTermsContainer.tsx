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
                    <Text style={styles.h3Style} >POLÍTICA DE PRIVACIDAD</Text>
                    <Text> Última actualización: 02/05/2025</Text>
                    <View style={{ height: 20 }} />
                    <Text style={styles.h4Style}>Tengan una cordial bienvenida a camiNOS.uio. Nos preocupamos profundamente por su privacidad y estamos comprometidos a proteger la información personal de quienes usan la aplicación. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos tu información cuando utilizas esta herramienta.</Text>
                    <View style={{ height: 20 }} />
                    <Text style={styles.h3Style}>INFORMACIÓN QUE RECOPILAMOS</Text>
                    <Text style={styles.h3Style}>- Información Personal</Text>

                    <Text style={styles.h4Style}>CamiNos Uio está pensada esencialmente la protección de derechos de personas en situación de movilidad humana y vulnerabilidad razón por la cual no recopila ningún tipo de información.</Text>
                    <View style={{ height: 20 }} />
                    <Text style={styles.h3Style}>- Datos de Uso</Text>
                    <Text style={styles.h4Style}>La aplicación no necesita conexión a internet ni datos del dispositivo de ningún tipo, una vez instalada se puede hacer uso de todas sus características sin ningún tipo de conexión o uso de datos</Text>

                    <View style={{ height: 20 }} />
                    <Text style={styles.h3Style}>- Cómo Utilizamos su Información</Text>
                    <Text style={styles.h4Style}>CaminosUio no hace uso de la información de sus usuarios.</Text>

                    <View style={{ height: 20 }} />
                    <Text style={styles.h3Style}>- Compartir su Información</Text>
                    <Text style={styles.h4Style}>CaminosUio no hace uso de la información de sus usuarios</Text>

                    <View style={{ height: 20 }} />
                    <Text style={styles.h3Style}>- Cookies y Tecnologías Similares</Text>
                    <Text style={styles.h4Style}>CaminosUio no hace uso de la información de sus usuarios.</Text>

                    <View style={{ height: 20 }} />
                    <Text style={styles.h3Style}>- Seguridad</Text>
                    <Text style={styles.h4Style}>CaminosUio es una aplicación meramente informativa, no representa riesgos en la seguridad de su información ya que no recopila ningún tipo de datos del usuario, del dispositivo o de ubicación.</Text>

                    <View style={{ height: 20 }} />
                    <Text style={styles.h3Style}>- Cambios en esta Política de Privacidad</Text>
                    <Text style={styles.h4Style}>Cualquier cambio en las políticas de privacidad serán notificadas a través de las redes de la fundación cuadrante sur. Tener en cuenta que no se forzara la actualización en ningún dispositivo y sus versiones anteriores continuarán siendo 100% funcionales y seguras.</Text>

                    <View style={{ height: 20 }} />
                    <Text style={styles.h3Style}>- Contactos</Text>
                    <Text style={styles.h4Style}>Si tiene preguntas o inquietudes sobre nuestra política de privacidad, no dude en ponerse en contacto con nosotros en info@cuadrantesur.org.</Text>
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
        marginBottom: 10,
        fontSize:20
    },
    h4Style: {
        textAlign: 'justify',
        justifyContent: 'center',
        color: 'gray',
        fontSize: 20
    },
    text: {
        // backgroundColor: 'transparent',
        fontSize: 30,
        // color: '#fff',
        textAlign: 'justify',
        justifyContent: 'center'
    },
});
