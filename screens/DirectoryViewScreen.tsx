import { useEffect, useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Chip, Text } from '@rneui/themed';
import MainLayout from '../components/MainLayout';
import { database } from '../data/directory.json';


export default function DirectoryViewScreen(props: any) {
    const { route, navigation } = props;
    const { id, name } = route.params;
    const [organization, setOrganization] = useState<any>({});

    useEffect(() => {
        const org = database.find((item: any) => item.id === id);
        setOrganization(org);
    }, []);

    if (!organization) return <View />;
    return (
        <MainLayout  {...props} headerTitle={organization.name} backButton={true}>
            <View style={styles.container}>
                <View style={styles.space} />
                <Text h3>{organization.name}</Text>
                <Chip title={organization.type} containerStyle={{ marginTop: 5, marginBottom: 5 }} size='sm' />
                <View style={styles.space} />
                <Text h4>Quienes son / Que hacen?</Text>
                <View style={styles.space} />
                <Text>{organization.description}</Text>
                <View style={styles.space} />
                <Text h4>Canales:</Text>
                <View style={styles.space} />
                <Text>Telefono:  <Text>{organization.phone}</Text></Text>
                <Text>Correo:     <Text>{organization.email}</Text></Text>
                <Text>Web:         <Text>{organization.web}</Text></Text>
                <View style={styles.space} />
                <Text h4>Sector / Dirección:</Text>
                <View style={styles.space} />
                <Text>{organization.area} / {organization.address}</Text>
                <View style={styles.space} />
                <View style={styles.space} />

                {!!organization.tag1 && <Chip title={organization.tag1} containerStyle={{ marginTop: 5, marginBottom: 5 }} size='sm' onPress={() => navigation.replace('TagFiltering', { tag: organization.tag1 })} />}
                {!!organization.tag2 && <Chip title={organization.tag2} containerStyle={{ marginTop: 5, marginBottom: 5 }} size='sm' onPress={() => navigation.replace('TagFiltering', { tag: organization.tag2 })}/>}
                {!!organization.tag3 && <Chip title={organization.tag3} containerStyle={{ marginTop: 5, marginBottom: 5 }} size='sm' onPress={() => navigation.replace('TagFiltering', { tag: organization.tag3 })}/>}
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 15
    },
    space: {
        height: 15
    }
});