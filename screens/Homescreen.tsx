import { StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import FavBar from '../components/FavoritesBar';
import Button from '../components/Button';
import Card from '../components/Card';
import { FontAwesome } from '@expo/vector-icons';
import Star from '../components/Star';

// NEED TO FIX WHERE THIS IS ON THE PAGE
// SHOULD BE IN TITLE BAR, GOTTA FIGURE THAT OUT
export default function HomeScreen({ navigation }: RootTabScreenProps<'Homescreen'>) {
  const cardList = [
    {
      id: 0,
      card: <Card onPress={null} text={"cards"} favorited={true} id={0}/>,
    }];

  const [cards, setCards] = useState(cardList);
  global.cards = cards

  // global.favList = global.cards.filter((item: any) => item.card.props.favorited == true)

  function addCards() {
    const newList = global.cards.concat(
    {
        id: global.cards.length,
        card: <Card onPress={() => console.warn(global.id)} text={global.cards.length} favorited={global.cards.length % 3 == 0} id={global.cards.length}/>,
    })  
    setCards(newList);
  }

React.useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <Pressable
        // onPress={addCards}
        onPress={() => navigation.navigate('AddCard')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}>
        <FontAwesome
          name="plus"
          size={25}
          color={'grey'}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    ),
  })
}, [global.cards.length])

  return (
    <ScrollView style={styles.scroll}>
      <FavBar onPress={() => navigation.navigate('Favorites')} onPress1={() => navigation.navigate('Root')} home={true}/>
      <View style={styles.container}>
        {global.cards.map((c: any) => {
          return (
            <View key={c.id} style={styles.view}>
                {/* {c.card} */}
                <Card text={"Food"}></Card>
                <Card text={"Music"}></Card>
                <Card text={"Videos"}></Card>
                <Card text={"Activities"}></Card>
                <Card text={"Quotes"}></Card>
                <Card text={"Meditations"}></Card>
                <Card text={"Journal"}></Card>
                <Card text={"People"}></Card>
                <Card text={"Pets"}></Card>
                <Card text={"Pictures"}></Card>
                {/* <View style={styles.star}>
                <Star/>
                </View> */}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  star: {
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 15,
    marginLeft: 12
  }
});
