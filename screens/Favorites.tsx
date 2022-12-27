import { View, Text } from '../components/Themed';
import { ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import FavBar from '../components/FavoritesBar';
import Card from '../components/Card';

export default function Favorites({ navigation }: RootStackScreenProps<'Favorites'>, props: any) {
    const newList: any[] = []

    const listItems = global.cards.map((c: any) => {

        if (c.favorited) {
            newList.concat(c)
        }

        return (
            newList.map((c: any) => {
                <View key={c.id} style={styles.view}>
                    {c.card}
                </View>
            })
        );
    })

    const list = global.cards.filter((item: any) => item.favorited == true)
    const t = list.length

    return (
        <ScrollView>
            <FavBar onPress={() => navigation.navigate('Favorites')} onPress1={() => navigation.navigate('Root')} home={false}/>
            <Text>
                Favorites
            </Text>
            <View style={styles.container}>
                {list.map((c: any) => {
                    return (
                    <View key={c.id} style={styles.view}>
                        {c.card}
                    </View>
                    );
                })}
            {/* </Text> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
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