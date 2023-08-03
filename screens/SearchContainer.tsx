import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from '@rneui/themed';


import { database } from '../data/directory.json'

import MainLayout from '../components/MainLayout';
import DirectoryItem from '../components/DirectoryItem';


export default function SearchContainer(props: any) {
    const { navigation } = props;
    const [search, setSearch] = useState("");

    useEffect(() => {
        // console.log(database);
    }, []);

    const updateSearch = (query: string) => {
        setSearch(query);
    };

    return (
        <MainLayout  {...props} headerTitle={"Directorio"}>
            <View style={styles.container}>
                <View style={styles.searchContent}>
                    <SearchBar
                        placeholder="Nombre, Categoria, etc..."
                        onChangeText={updateSearch}
                        value={search}
                        platform='ios'
                        containerStyle={{ backgroundColor: 'transparent' }}
                    />

                    <FlatList
                        data={database}
                        renderItem={(item: any) => <DirectoryItem organization={item.item} />}
                        keyExtractor={(item: any) => item.id}
                        initialNumToRender={6}
                    />
                </View>
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    searchContent: {
        width: '100%'
    }
});