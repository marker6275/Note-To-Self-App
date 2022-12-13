import { StyleSheet, Linking, FlatList, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import Button from '../components/Button';
import { RootTabScreenProps } from '../types';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Plan2({ navigation }: RootTabScreenProps<'Grade2'>) {
    return (
        <ScrollView style={styles.containerBox} contentContainerStyle={styles.container}>
            <Text style={styles.title}>Grade 2 Action Plan</Text>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.text}>Take a deep breath</Text>
            <Text style={styles.emphasis}>3 counts in, and 6 counts out.</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.emphasis}>Here are your action items for today?</Text>
            <FlatList
            data={[
                // WE NEED TO FIX THIS
                // Make a checklist
                {key: 'random from favorites 1'},
                {key: 'random from favorites 2'},
                {key: 'random from favorites 3'},
                // ALSO NEED TO MAKE A REFRESH BUTTON 
            ]}
            renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>} />

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.emphasis}>In addition to these, take a look at these quick exercises:</Text>

            {/* RANDOMIZE DISTRACTION TECHNIQUE? */}
            <Text style={styles.emphasis}>5-4-3-2-1</Text>
            <FlatList contentContainerStyle={styles.container}
            data={[
                {key: 'Look around the room, and name 5 things you can see,'},
                {key: '4 things you can feel,'},
                {key: '3 things you can hear,'},
                {key: '2 things you can smell,'},
                {key: 'and 1 thing you can taste.'},
            ]}
            renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}
            />
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.emphasis}>Color Count</Text>
            <Text style={styles.text}>Look around you and keep naming everything you see that is a certain color and count them. 
            I.e. Count all the red objects in the room.</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <Text style={styles.emphasis}>Box Breathing</Text>
            <Text style={styles.text}>Breath in 4 counts, hold for 4 counts, breath out for 4 counts </Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Button title="Done!" onPress={() => navigation.navigate('NotFound')}/>

        </ScrollView>
            
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBox: {
        marginHorizontal: 10,
        marginBottom: 10
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    text: {
        fontSize: 19,
        fontWeight: 'normal',
    },
    emphasis: {
        fontSize: 19,
        fontWeight: 'bold',
    },
})