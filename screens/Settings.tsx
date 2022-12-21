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
      
      <View style={styles.button}>
        
      {/* Make this page menu format! */}
      {/* <Menu
          visible={visible}
          anchor={<Button onPress={() => navigation.navigate('NotFound')}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu> */}

      <Button title="Notifications" onPress={() => navigation.navigate('NotFound')}/>
      <Button title="Account" onPress={() => navigation.navigate('NotFound')} />
      </View>
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
  button: {
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: 'transparent',
    }
});
