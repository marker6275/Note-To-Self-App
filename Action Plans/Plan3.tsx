import { StyleSheet, Pressable, Linking, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../components/Themed';
import Button from '../components/Button';
import { RootTabScreenProps } from '../types';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckBox from '../components/Checkbox';

export default function Plan3({ navigation }: RootTabScreenProps<'Grade3'>) {
    const [pressed1, setPressed1] = useState(false);
    const [pressed2, setPressed2] = useState(false);
    const [pressed3, setPressed3] = useState(false);
    const [pressed4, setPressed4] = useState(false);
    const [pressed5, setPressed5] = useState(false);
    return (
        <ScrollView contentContainerStyle={styles.container} style={styles.containerBox}>
            <Text style={styles.title}>Your Grade 3 Action Plan</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                <Text style={styles.text}>Take a minute to</Text>
                <Text style={styles.emphasis}>stop and breathe!</Text>
                <Text style={styles.text}>Breathe in for 3 counts,</Text>
                <Text style={styles.text}>and breathe out for 6 counts.</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            
            <View style={styles.box}>
                <Text style={styles.text}>Who is a trusted person that you can call?</Text>
                <Text style={styles.emphasis}>Call them!</Text>
            </View>
            
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.box}>
                <Text style={styles.text}>If they don't pick up, call 988</Text>
                <Text onPress={()=>{Linking.openURL('tel:8329458288');}} style={styles.emphasis}>Call 988 NEED TO FIX</Text>
            </View>
            

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.text}>While you're waiting, here's a </Text>
            <Text style={styles.text}>distraction technique you can use:</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                {/* RANDOMIZE DISTRACTION TECHNIQUE? */}
                <Text style={styles.emphasis}>5-4-3-2-1</Text>
                <Text style={styles.text}>Look around the room, and name:</Text>

                <CheckBox title="5 things you can see" onPress={() => setPressed1(!pressed1)} isChecked={pressed1} textStyle={styles.checklist}/>
                <CheckBox title="4 things you can feel" onPress={() => setPressed2(!pressed2)} isChecked={pressed2} textStyle={styles.checklist}/>
                <CheckBox title="3 things you can hear" onPress={() => setPressed3(!pressed3)} isChecked={pressed3} textStyle={styles.checklist}/>
                <CheckBox title="2 things you can smell" onPress={() => setPressed4(!pressed4)} isChecked={pressed4} textStyle={styles.checklist}/>
                <CheckBox title="1 thing you can taste" onPress={() => setPressed5(!pressed5)} isChecked={pressed5} textStyle={styles.checklist}/>
            </View>
            
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                <Text style={styles.text}>Once you're feeling more grounded from the distraction techniques, you can take a look at more things that help you relax.</Text>
            </View>

            {/* RANDOMIZE AN ACTIVITY FROM THE FAVOURITES PAGE */}
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <Pressable style={styles.button} onPress={() => navigation.navigate('Congrats')}>
                <Text style={styles.emphasis}>Done!</Text>
            </Pressable>
        </ScrollView>
            
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      paddingBottom: 70
    },
    containerBox: {
        marginHorizontal: 10,
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
        justifyContent: 'center',
        textAlign: 'center',

    },
    emphasis: {
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    checklist: {
        fontSize: 18,
    },
    button: {
        backgroundColor: '#FFBB98',
        padding: 10,
        borderRadius: 10,
    },
    box: {
        backgroundColor: '#FBE0C3',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
    }
})