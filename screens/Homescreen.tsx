import { StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import FavBar from '../components/FavoritesBar';
import Button from '../components/Button';
import Card from '../components/Card';
import AddButton from '../components/AddButton';

// NEED TO FIX WHERE THIS IS ON THE PAGE
// SHOULD BE IN TITLE BAR, GOTTA FIGURE THAT OUT
export default function HomeScreen({ navigation }: RootTabScreenProps<'Homescreen'>) {
  
  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <FavBar/> */}
      <AddButton onPress={() => navigation.navigate('NotFound')}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
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
});
