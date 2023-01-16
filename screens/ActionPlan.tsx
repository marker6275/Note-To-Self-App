import { SafeAreaView, FlatList, TouchableWithoutFeedback, StyleSheet, StatusBar, Image, Pressable } from 'react-native';
import React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Button from '../components/Button';
import NotFoundScreen from './NotFoundScreen';
import { NavigationContainerRefContext, useLinkProps, useNavigation } from '@react-navigation/native'
import TabOneScreen from './Homescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';

export default ( {navigation}: {navigation: any} ) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          // onPress={addCards}
          onPress={() => navigation.navigate('APE')}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <FontAwesome
            name="question-circle-o"
            size={25}
            color={'grey'}
            style={{ marginRight: 15 }}
          />
        </Pressable>
      ),
    })
  }, [global.cards.length])
  return (
    
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Grade1')}>
        <Image style={styles.image} source={require('../images/greentick.png')} />
      </TouchableWithoutFeedback>
      <Button title="Grade 1 Action Plan" onPress={() => navigation.navigate('Grade1')}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TouchableWithoutFeedback onPress={() => navigation.navigate('Grade2')}>
        <Image style={styles.image} source={require('../images/greentick.png')} />
      </TouchableWithoutFeedback>
      <Button title="Grade 2 Action Plan" onPress={() => navigation.navigate('Grade2')}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TouchableWithoutFeedback onPress={() => navigation.navigate('Grade3')}>
        <Image style={styles.image} source={require('../images/greentick.png')} />
      </TouchableWithoutFeedback>
      <Button title="Grade 3 Action Plan" onPress={() => navigation.navigate('Grade3')}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Button title="I need extra help" onPress={() => navigation.navigate('ExtraHelp')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'ghostwhite',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginTop: 10,
    marginBottom: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 75,
    height: 75,
  }
});