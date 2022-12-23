import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import FavBar from '../components/FavoritesBar';
import Button from '../components/Button';
import Card from '../components/Card';
import { FontAwesome } from '@expo/vector-icons';

// NEED TO FIX WHERE THIS IS ON THE PAGE
// SHOULD BE IN TITLE BAR, GOTTA FIGURE THAT OUT
export default function HomeScreen({ navigation }: RootTabScreenProps<'Homescreen'>) {
  const cardList = [
    {
      id: 1,
      card: <Card onPress={null} text={"card"}/>
    }];
  const [cards, setCards] = useState(cardList);
  const newList = cards.concat(
    {
        id: cards.length + 1,
        card: <Card onPress={null} text={cards.length + 1}/>
    })
  function addCards() {
    const newList = cards.concat(
    {
        id: cards.length + 1,
        card: <Card onPress={null} text={cards.length + 1}/>
    })
    setCards(newList);
}

React.useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <Pressable
              onPress={addCards}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="plus"
                size={25}
                color={'white'}
                style={{ marginRight: 15 }}
              />
            </Pressable>
    ),
  })
}, [cards.length])

  return (
    <ScrollView style={styles.scroll}>
      <FavBar onPress={() => navigation.navigate('Favorites')} onPress1={() => navigation.navigate('Root')} home={true}/>
      <Text style={{color: 'purple'}}>
        can we keep the random colors here until it's finalized, just so it's easier to see things
      </Text>
      <View style={styles.container}>
      {cards.map((c) => {
        return (
          <View key={c.id} style={styles.view}>
              {c.card}
          </View>
        );
      })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'ghostwhite',
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row'
  },
  scroll: {
    flex: 1,
    backgroundColor: 'ghostwhite',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  view: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row'
  }
});
