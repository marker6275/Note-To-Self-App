import { TextInput, ScrollView } from 'react-native';
import { View, Text } from '../components/Themed';
import { useState } from 'react';
import { RootStackScreenProps } from '../types';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Menu } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import Button from '../components/Button';
import NotFoundScreen from './NotFoundScreen';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import TabOneScreen from './Homescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from '../components/Card';

export default function AddCard({ navigation }: RootStackScreenProps<'AddCard'>) {
    const [text, setText] = useState('');
    // const [cards, setCards] = useState([]);
    // global.cards = cards
    function showText() {
        <View>
            <Text style={{padding: 10, fontSize: 42}}>
                {text.split(' ').map((word) => word).join(' ')}
            </Text>
        </View>
    }
    // function addCards() {
    //     const newList = global.cards.concat(
    //     {
    //         id: global.cards.length,
    //         card: <Card onPress={() => console.warn(global.id)} text={global.cards.length} favorited={global.cards.length % 3 == 0} id={global.cards.length}/>,
    //     })  
    //     setCards(newList);
    // }

    return (
        <ScrollView>
            
            <Text style={styles.title}>What would you like to add?</Text>
            <TextInput
                style={{height: 35, 
                    color: 'black', 
                    backgroundColor: 'white',
                    marginHorizontal: 20,
                    borderRadius: 15,}}
                placeholder="Search"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                textAlign="center"
                clearButtonMode='while-editing'
                onSubmitEditing={showText}
            />
            <View style={styles.separator} lightColor="transparent" darkColor="transparent"/>

            <Text style={styles.emphasis}>Categories that haven't been added:</Text>
            {/* FIGURE OUT HOW TO DO THIS */}
            <Button title="FIGURE THIS OUT" onPress={() => navigation.navigate('NotFound')}/>
            <Button title="FIGURE THIS OUT" onPress={() => navigation.navigate('NotFound')}/>

            {/* <View style={styles.separator}/> */}
            <Text style={styles.emphasis}>All Categories:</Text>

            
            <Button title="Food" onPress={() => navigation.navigate('NotFound')}/>
            <Button title="Music" onPress={() => navigation.navigate('NotFound')}/>
            <Button title="Video" onPress={() => navigation.navigate('NotFound')}/>
            <Button title="Activity" onPress={() => navigation.navigate('NotFound')}/>
            <Button title="Quote" onPress={() => navigation.navigate('NotFound')}/>
            <Button title="Meditation" onPress={() => navigation.navigate('NotFound')}/>
            <Button title="Journal Entry" onPress={() => navigation.navigate('NotFound')}/>
            <Button title="People" onPress={() => navigation.navigate('NotFound')}/>
            <Button title="Pets" onPress={() => navigation.navigate('NotFound')}/>
            <Button title="Pictures" onPress={() => navigation.navigate('NotFound')}/>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'ghostwhite',
      justifyContent: 'center',
      alignContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20,
    },
      emphasis: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: '5%',
        marginBottom: 15,
    },
    button: {
      width: Dimensions.get('window').width,
    },
    item: {
      fontSize: 16,
      paddingLeft: '15%',
      paddingVertical: 30,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      color: 'black'
    },
    separator: {
        marginVertical: 20,
        height: 1,
        width: '80%',
    }
  });

function setCards(newList: any) {
    throw new Error('Function not implemented.');
}
