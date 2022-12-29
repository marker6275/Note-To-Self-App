import { StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, Dimensions } from 'react-native';
import { Menu } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import Button from '../components/Button';
import NotFoundScreen from './NotFoundScreen';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import TabOneScreen from './Homescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from '../components/Card';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function Account({ navigation }: RootStackScreenProps<'Account'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name</Text>
      <TextInput
                style={styles.text}
                placeholder="Evan Chen"
                textAlign="center"
                clearButtonMode='while-editing'
            />

      <View style={styles.separator} lightColor="transparent" darkColor="transparent" />
      <Text style={styles.title}>Email</Text>
      <TextInput
                style={styles.text}
                placeholder="evanchen2025@u.northwestern.edu"
                textAlign="center"
                clearButtonMode='while-editing'
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    backgroundColor: 'ghostwhite',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  image: {
    flex: 0.5,
    width: 100,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 19,
    fontWeight: 'normal',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
},
separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
