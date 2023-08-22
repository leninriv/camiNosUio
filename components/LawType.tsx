import { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, ListItem } from '@rneui/themed';

export default function LawType(props: any) {
    const { content, colors } = props;

    useEffect(() => {  
    }, []);

    function articleItem(article: any) {
        return (
            <View>
                <Text h4>{article.title}</Text>
                <View style={{ height: 15 }} />
                <Text style={styles.articleText}>{article.text}</Text>
                <View style={{ height: 30 }} />
            </View>
        )
    }

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                <View style={{ height: 30 }} />
                {!!content.articles && content.articles.map((item: any) => articleItem(item))}
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    articleText: {
        textAlign: 'justify',
        fontSize: 20,
        marginBottom: 10,
    },
});
