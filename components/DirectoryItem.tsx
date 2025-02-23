import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip, ListItem } from '@rneui/themed';

import { LinearGradient } from 'expo-linear-gradient';

export default function DirectoryItem(props: any) {
    const { organization, navigation } = props;
    return (
        <ListItem
            linearGradientProps={{
                colors: ['#a1a1a1', '#4d4d4d'],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
            }}
            ViewComponent={LinearGradient}
            containerStyle={styles.container}
            onPress={() => { navigation.navigate('DirectoryView', { id: organization.id}) }}
        >
            <ListItem.Content>
                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>{organization.name}</ListItem.Title>
                <ListItem.Subtitle style={{ color: 'white' }}>{organization.description} </ListItem.Subtitle>
                <Chip title={organization.tag1} containerStyle={{ marginTop: 5 }}  color={'gray'} size='sm' />
            </ListItem.Content>
            <ListItem.Chevron color="white" />
        </ListItem>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    },

});