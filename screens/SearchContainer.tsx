import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from '@rneui/themed';


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
    const [currentTitle, setCurrentTitle] = useState('');


    useEffect(() => {
        let globalList: any[] = [];
        if (params?.tag) {
            setCurrentTitle(params.tag);
            globalList = database.filter(item => item.tag1 === params.tag || item.tag2 === params.tag || item.tag3 === params.tag || item.tag4 === params.tag || item.tag4 === params.tag);
        } else if (params?.type) {
            setCurrentTitle(params.type);
            globalList = database.filter(item => item.type === params.type);
        } else if (params?.name) {
            setCurrentTitle(params.name);
            globalList = database.filter(item => item.name.includes(params.name));
        }
        else {
            globalList = [...database];
        }
        globalList = globalList.sort((a, b) => ((a.name < b.name) ? -1 : 1));
        globalList = globalList.filter(item => !!item.name);
        setMainList(globalList);
        setDataList(globalList);
    }, []);

    const updateSearch = (query: string) => {
        if (query.length > 2) {
            const newList = mainList.filter((item: any) => (item.name.toLowerCase().includes(query.toLowerCase()) || item.tag1?.toLowerCase().includes(query.toLowerCase()) || item.tag2?.toLowerCase().includes(query.toLowerCase()) || item.tag3?.toLowerCase().includes(query.toLowerCase())));
            setDataList(newList);
        } else {
            setDataList(mainList);
        }
        setSearch(query);
    };

    return (
        <MainLayout  {...props} headerTitle={currentTitle || "Directorio"} backButton={true}>
            <View style={styles.container}>
                <View style={styles.searchContent}>
                    <SearchBar
                        placeholder="Nombre, Categoria, etc..."
                        onChangeText={updateSearch}
                        value={search}
                        platform='android'
                        containerStyle={{ backgroundColor: 'transparent' }}
                    />
                    <FlatList
                        showsVerticalScrollIndicator={false}
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
