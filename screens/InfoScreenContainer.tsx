import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainLayout from '../components/MainLayout';
import screensList from '../data/info_screens.json'
import ParagraphType from '../components/ParagraphType';
import LawType from '../components/LawType';
import { Dialog } from '@rneui/themed';

export default function InfoScreenContainer(props: any) {
    const { navigation, route } = props;
    const { item, colors, mainNav } = route.params;
    const initScreen: any = {};
    const [currentScreen, setCurrentScreen] = useState(initScreen);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const allScreens: any = JSON.parse(JSON.stringify(screensList));
        const selectedScreen = allScreens[item.screen];
        if (!selectedScreen) navigation.replace(item.screen);
        setCurrentScreen(allScreens[item.screen]);
        
        if (allScreens[item.screen]?.modal?.body) setModalVisible(true);
    }, []);

    const onToggleModal = () => {
        setModalVisible(!modalVisible)
    }

    if (!currentScreen) return <View />;

    return <MainLayout  {...props} headerTitle={item.title} backButton>
        <View style={styles.container}>

            {currentScreen.type === 'paragraph' && <ParagraphType content={currentScreen} colors={colors} navigation={navigation} />}
            {currentScreen.type === 'law' && <LawType content={currentScreen} colors={colors} />}

            <Dialog
                isVisible={modalVisible}
                onBackdropPress={onToggleModal}
            >
                {!!currentScreen.modal?.title && <Dialog.Title title={currentScreen.modal?.title} />}
                {!!currentScreen.modal?.body && <Text>{currentScreen.modal?.body}</Text>}
            </Dialog>
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
