import { StyleSheet, Linking, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../components/Themed';
import Button from '../components/Button';
import { RootTabScreenProps } from '../types';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckBox from '../components/Checkbox';

export default function Plan1({ navigation }: RootTabScreenProps<'Grade1'>) {

    const [pressed1, setPressed1] = useState(false);
    const [pressed2, setPressed2] = useState(false);
    const [pressed3, setPressed3] = useState(false);
    return (
        <ScrollView style={styles.containerBox} contentContainerStyle={styles.container}>
            <Text style={styles.title}>Grade 1 Action Plan</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.emphasis}>Here are your action items for today?</Text>
            <CheckBox title="random 1" onPress={() => setPressed1(!pressed1)} isChecked={pressed1} textStyle={styles.checklist}/>
            <CheckBox title="random 2" onPress={() => setPressed2(!pressed2)} isChecked={pressed2} textStyle={styles.checklist}/>
            <CheckBox title="random 3" onPress={() => setPressed3(!pressed3)} isChecked={pressed3} textStyle={styles.checklist}/>
            {/* <FlatList
            data={[
                // WE NEED TO FIX THIS
                // Make a checklist
                {key: 'random 1'},
                {key: 'random 2'},
                {key: 'random 3'},
                
            ]}
            renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>} /> */}
            {/* // ALSO NEED TO MAKE A REFRESH BUTTON  */}
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />   
            <Button title="Done!" onPress={() => navigation.navigate('NotFound')}/>
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
    checklist: {
        color: '#fff',
        backgroundColor: '#fff'
    }
})