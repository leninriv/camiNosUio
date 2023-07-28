import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip, ListItem } from '@rneui/themed';

import { LinearGradient } from 'expo-linear-gradient';

export default function DirectoryItem(props: any) {

    return (
        <ListItem
            linearGradientProps={{
                colors: ['#a1a1a1', '#4d4d4d'],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
            }}
            ViewComponent={LinearGradient}
            containerStyle={styles.container}
        >
            <ListItem.Content>
                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>AKUANUNA</ListItem.Title>
                <ListItem.Subtitle style={{ color: 'white' }}>Entidad sin fines de lucro, independiente, feminista, apartidista y laica. </ListItem.Subtitle>
                <Chip title="Informacion" containerStyle={{ marginTop: 5 }} size='sm' />
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