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
      {/* <Text style={styles.item} onPress={() => navigation.navigate('NotFound')}>Notifications</Text>
      <Text style={styles.item} onPress={() => navigation.navigate('NotFound')}>Settings</Text> */}
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
    paddingTop: 30,
  },
  button: {
    backgroundColor: '#FCFAA6',
    textAlign: 'left',
  },
  item: {
    fontSize: 16,
    paddingLeft: '15%',
    paddingVertical: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black'
  }
});
