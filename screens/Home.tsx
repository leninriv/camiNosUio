import { FlatList, StyleSheet, Image, View, Text } from 'react-native';
import { Button } from '@rneui/themed';

import MainLayout from '../components/MainLayout';
import GradientButton from '../components/GradientButton';

export default function HomeScreen(props: any) {
    const { navigation } = props;
    const buttons = [
        {
            colors: ['#FF9800', '#F44336'],
            text: 'Texto mas largo',
            route: 'Test'
        },
        {
            colors: ['#d10074', '#192f6a'],
            text: ' prueba 2',
            route: 'Test'
        },
        {
            colors: ['#4c669f', '#468499'],
            text: ' prueba 3',
            route: 'Test'
        },
        {
            colors: ['#0f8d47', '#192f6a'],
            text: ' prueba 4',
            route: 'Test'
        },
        {
            colors: ['#4c669f', '#192f6a'],
            text: ' prueba 5',
            route: 'Test'
        }
    ]

    function wellcomeImage() {
        return <View style={{alignItems:'center'}}>
            <Text>Vamos a empezar!</Text>
            <Image
                style={styles.stretch}
                source={require('../assets/images/start.png')}
            />
        </View>
    }
    return (
        <MainLayout  {...props} headerTitle={"INICIO"}>
            <View style={styles.container}>
                {/* <Button title="Navegar" onPress={() => { navigation.navigate('Test') }} /> */}

                <FlatList
                    data={buttons}
                    columnWrapperStyle={styles.row}
                    numColumns={2}
                    keyExtractor={(item: any) => item.text}
                    renderItem={(item: any) => <GradientButton style={styles.columButtonStyle} text={item.item.text} colors={item.item.colors} onPres={() => { navigation.navigate('Test') }} />}
                    ListFooterComponent={<GradientButton text={'Super botton'} colors={['#395961', '#F44336']} onPres={() => { navigation.navigate('Test') }} />}
                    ListHeaderComponent={wellcomeImage()}
                />

            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    },
    columButtonStyle: {
        width: '49%'
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 15
    },
    stretch: {
        width: 380,
        height: 200,
        resizeMode: 'stretch',
    },
});
