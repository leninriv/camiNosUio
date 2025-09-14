import { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Linking } from 'react-native';
import { Text, Button } from '@rneui/themed';

export default function ParagraphType(props: any) {
    const { content, colors, navigation } = props;

    useEffect(() => {

    }, []);

    function urlType(link: any) {
        // link.url
        if (link.type === 'external') return <Button style={styles.button} title={link.name} color={'warning'} onPress={() => { Linking.openURL(link.url) }} />; // TODO: navigation its different
        if (link.type === 'internal') return <Button style={styles.button} title={link.name} onPress={() => { navigation.navigate('directory_result', { ...link.filter }); }} />;
        if (link.type === 'nav_internal') return <Button style={styles.button} title={link.name} onPress={() => { navigation.navigate(link.url, { ...link.filter }); }} />;
        return <View />
    }

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                {!!content.title && <Text style={{ marginBottom: 20 }} h4>{content.title}</Text>}

                {!!content.content1 && <Text style={styles.paragraph}>{content.content1}</Text>}
                {!!content.link1 && urlType(content.link1)}

                {!!content.content2 && <Text style={styles.paragraph}>{content.content2}</Text>}
                {!!content.link2 && urlType(content.link2)}

                {!!content.content3 && <Text style={styles.paragraph}>{content.content3}</Text>}
                {!!content.link3 && urlType(content.link3)}

                {!!content.content4 && <Text style={styles.paragraph}>{content.content4}</Text>}
                {!!content.link4 && urlType(content.link4)}

                {!!content.content5 && <Text style={styles.paragraph}>{content.content5}</Text>}
                {!!content.link5 && urlType(content.link5)}
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
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    paragraph: {
        textAlign: 'justify',
        fontSize: 20,
        marginBottom: 10,
    },
    button: {
        marginBottom: 10,
    }
});
