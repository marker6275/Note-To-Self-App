import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Menu } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Button from '../components/Button';
import NotFoundScreen from './NotFoundScreen';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import TabOneScreen from './Homescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default ( {navigation}: {navigation: any} ) => {
  return (
    <View style={styles.container}> 
      <Button onPress={() => navigation.navigate('Notifs')} title={'Notifications'}/>
      <Button onPress={() => navigation.navigate('NotFound')} title={'Settings'}/>
      <Button onPress={() => navigation.navigate('Account')} title={'Account'}/>
      <Button onPress={() => navigation.navigate('NotFound')} title={'Our Mission'}/>
      <Button onPress={() => navigation.navigate('Login')} title={'Login (temporary)'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
