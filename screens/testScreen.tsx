import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Timeline from 'react-native-timeline-flatlist'
import MainLayout from '../components/MainLayout';

export default function TestScreen(props: any) {

    const data = [
        { time: '0', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', circleColor: '#009688', lineColor: '#009688' },
        { time: '1', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.' },
        { time: '2', title: 'Lunch' },
        { time: '3', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ', lineColor: '#009688' },
        { time: '4', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', circleColor: '#009688' }
    ]

    const rigthIconRender = () => (
        <TouchableOpacity onPress={() => { }}>
            <Ionicons name="reload" size={32} color="white" />
        </TouchableOpacity>
    )

    return (
        <MainLayout  {...props} headerTitle={"CAMINOS"} rightComponent={rigthIconRender} backButton>
            <View style={styles.container}>
                <Timeline
                    style={styles.list}
                    data={data}
                    separator={true}
                    circleSize={20}
                    circleColor='rgb(45,156,219)'
                    lineColor='rgb(45,156,219)'
                    timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13, overflow: 'hidden' }}
                    descriptionStyle={{ color: 'gray' }}
                />
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
});
