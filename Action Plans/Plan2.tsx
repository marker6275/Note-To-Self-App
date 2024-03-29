import { StyleSheet, Pressable, Linking, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../components/Themed';
import Button from '../components/Button';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckBox from '../components/Checkbox';

export default function Plan2({ navigation }: RootStackScreenProps<'Grade2'>) {
    const [pressed1, setPressed1] = useState(false);
    const [pressed2, setPressed2] = useState(false);
    const [pressed3, setPressed3] = useState(false);
    const [pressed21, setPressed21] = useState(false);
    const [pressed22, setPressed22] = useState(false);
    const [pressed23, setPressed23] = useState(false);
    const [pressed24, setPressed24] = useState(false);
    const [pressed25, setPressed25] = useState(false);
    return (
        <ScrollView style={styles.containerBox} contentContainerStyle={styles.container}>
            <Text style={styles.title}>Your Grade 2 Action Plan</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                <Text style={styles.text}>Take a minute to</Text>
                <Text style={styles.emphasis}>stop and breathe!</Text>
                <Text style={styles.text}>Breathe in for 3 counts,</Text>
                <Text style={styles.text}>and breathe out for 6 counts.</Text>
            </View>
            
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                <Text style={styles.emphasis}>Here are your action items for today:</Text>
                <CheckBox title="random 1" onPress={() => setPressed1(!pressed1)} isChecked={pressed1} textStyle={styles.checklist}/>
                <CheckBox title="random 2" onPress={() => setPressed2(!pressed2)} isChecked={pressed2} textStyle={styles.checklist}/>
                <CheckBox title="random 3" onPress={() => setPressed3(!pressed3)} isChecked={pressed3} textStyle={styles.checklist}/>
            </View>
            
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <Text style={styles.emphasis}>Well done! Now, take a</Text>
            <Text style={styles.emphasis}>look at these quick exercises:</Text>
            <View style={styles.separator} lightColor="transparent" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                {/* RANDOMIZE DISTRACTION TECHNIQUE? */}
                <Text style={styles.emphasis}>5-4-3-2-1</Text>
                <CheckBox title="random 1" onPress={() => setPressed21(!pressed21)} isChecked={pressed21} textStyle={styles.checklist}/>
                <CheckBox title="random 2" onPress={() => setPressed22(!pressed22)} isChecked={pressed22} textStyle={styles.checklist}/>
                <CheckBox title="random 3" onPress={() => setPressed23(!pressed23)} isChecked={pressed23} textStyle={styles.checklist}/>
                <CheckBox title="random 2" onPress={() => setPressed24(!pressed24)} isChecked={pressed24} textStyle={styles.checklist}/>
                <CheckBox title="random 3" onPress={() => setPressed25(!pressed25)} isChecked={pressed25} textStyle={styles.checklist}/>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.box}>
                <Text style={styles.emphasis}>Color Count</Text>
                <Text style={styles.text}>Look around you and keep naming everything you see that is a certain color and count them. 
                For example, count all the red objects in the room you're in.</Text>
            </View>
            
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                <Text style={styles.emphasis}>Box Breathing</Text>
                <Text style={styles.text}>Breath in 4 counts, hold for 4 counts, breath out for 4 counts </Text>
            </View>
            
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <Pressable style={styles.button} onPress={() => navigation.navigate('Congrats')}>
                <Text style={styles.emphasis}>Done!</Text>
            </Pressable>
            
        </ScrollView>
            
    )
}

const styles = StyleSheet.create({
    container: {
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
      marginVertical: 20,
      height: 1,
      width: '80%',
    },
    text: {
        fontSize: 19,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    emphasis: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    checklist: {
        color: '#fff',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#ADD8E6',
        padding: 10,
        borderRadius: 10,
    },
    box: {
        backgroundColor: '#FCFAA6',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
    }
})