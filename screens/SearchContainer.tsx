import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from '@rneui/themed';


import { database } from '../data/directory.json';

import MainLayout from '../components/MainLayout';
import DirectoryItem from '../components/DirectoryItem';


export default function SearchContainer(props: any) {
    const { navigation } = props;
    const list: any[] = [];
    const [search, setSearch] = useState("");
    const [dataList, setDataList] = useState(list);

    useEffect(() => {
        setDataList(database);
        // console.log(database);
    }, []);

    const updateSearch = (query: string) => {

        if (query.length > 3) {
            const newList = database.filter((item: any) => item.name.toLowerCase().includes(query.toLowerCase()));
            setDataList(newList);
        } else {
            setDataList(database);
        }
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
                        data={dataList}
                        renderItem={(item: any) => <DirectoryItem organization={item.item} navigation={navigation} />}
                        keyExtractor={(item: any) => item.id}
                        initialNumToRender={6}
                        ListFooterComponent={<View style={{ height: 100 }} />}
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
