import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainLayout from '../components/MainLayout';
import screensList from '../data/info_screens.json'
import ParagraphType from '../components/ParagraphType';
import LawType from '../components/LawType';

export default function InfoScreenContainer(props: any) {
    const { navigation, route } = props;
    const { item, colors, mainNav } = route.params;
    const initScreen: any = {};
    const [currentScreen, setCurrentScreen] = useState(initScreen);

    useEffect(() => {
        const allScreens: any = JSON.parse(JSON.stringify(screensList));
        setCurrentScreen(allScreens[item.screen])
    }, []);

    if (!currentScreen) return <View />;

    return <MainLayout  {...props} headerTitle={item.title} backButton>
        <View style={styles.container}>

            {currentScreen.type === 'paragraph' && <ParagraphType content={currentScreen} colors={colors}/>}
            {currentScreen.type === 'law' && <LawType content={currentScreen} colors={colors}/>}

           
        </View>
    </MainLayout>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
