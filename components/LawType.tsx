import { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Linking } from 'react-native';
import { Text, ListItem , Button} from '@rneui/themed';

export default function LawType(props: any) {
    const { content, colors } = props;

    useEffect(() => {
    }, []);

    function articleItem(article: any) {
        return (
            <View>
                {!!article.title && <Text h4 style={styles.articleTitle}>{article.title}</Text>}
                {!!article.title && <View style={{ height: 15 }} />}
                {!!article.text && <Text style={styles.articleText}>{article.text}</Text>}
                {!!article.text && <View style={{ height: 30 }} />}
                {!!article.link && <Button style={styles.button} title={article.link.name} color={'warning'} onPress={() => { Linking.openURL(article.link.url) }} />}
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
        // alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    articleText: {
        textAlign: 'justify',
        fontSize: 20,
        marginBottom: 10,
    },

    articleTitle: {
        textAlign: 'left',
    },
    button: {
        marginBottom: 10,
    }
});
