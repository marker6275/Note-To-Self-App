import { StyleSheet, Linking, FlatList, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import Button from '../components/Button';
import { RootTabScreenProps } from '../types';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Plan3({ navigation }: RootTabScreenProps<'Grade3'>) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Grade 3 Action Plan</Text>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.text}>Before you do anything,</Text>
            <Text style={styles.emphasis}>STOP AND BREATHE! 3 counts in, and 6 counts out.</Text>
            <Text style={styles.text}>Who is a trusted person that you can call? Call them!</Text>
            <Text style={styles.text}>If they don't pick up, call 988</Text>
            <Text onPress={()=>{Linking.openURL('tel:8329458288');}} style={styles.text}>Call 988 NEED TO FIX</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <Text style={styles.emphasis}>While you're waiting, here's a distraction technique you can use:</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            {/* RANDOMIZE DISTRACTION TECHNIQUE? */}
            <Text style={styles.emphasis}>5-4-3-2-1</Text>
            <FlatList
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

            <Text style={styles.text}>Once you're feeling more grounded from the distraction techniques, you can take a look at more things that help you relax.</Text>

            {/* RANDOMIZE AN ACTIVITY FROM THE FAVOURITES PAGE */}


            <Button title="Done!" onPress={() => navigation.navigate('NotFound')}/>

        </ScrollView>
            
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30
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
        fontSize: 18,
        fontWeight: 'bold',
    },
})