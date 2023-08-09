import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text, SearchBar } from '@rneui/themed';


import { database } from '../data/directory.json';

import MainLayout from '../components/MainLayout';
import DirectoryItem from '../components/DirectoryItem';


export default function SearchContainer(props: any) {
    const { navigation, route } = props;
    const { params } = route;
    const list: any[] = [];
    const [search, setSearch] = useState("");
    const [dataList, setDataList] = useState(list);
    const [mainList, setMainList] = useState(list);
    const [currentTat, setCurrentTag] = useState('');


    useEffect(() => {
        let globalList: any[] = [];
        if (params?.tag) {
            setCurrentTag(params.tag);
            globalList = database.filter(item => item.tag1 === params.tag || item.tag2 === params.tag || item.tag3 === params.tag);
        } else {
            globalList = [...database];
        }
        setMainList(globalList);
        setDataList(globalList);
    }, []);

    const updateSearch = (query: string) => {

        if (query.length > 3) {
            const newList = mainList.filter((item: any) => item.name.toLowerCase().includes(query.toLowerCase()));
            setDataList(newList);
        } else {
            setDataList(mainList);
        }
        setSearch(query);
    };

    return (
        <MainLayout  {...props} headerTitle={currentTat || "Directorio"} backButton={!!currentTat}>
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
