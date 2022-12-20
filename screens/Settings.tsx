import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Button from '../components/Button';
import NotFoundScreen from './NotFoundScreen';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import TabOneScreen from './Homescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
function MyTabs() {
  return (
    <Button title="testing"
    onPress={() => {
      console.log("hello")
    }}
    />
  );
}

export default ( {navigation}: {navigation: any} ) => {
  return (

    <View style={styles.container}> 
      <Button title="go somewhere" onPress={() => {
        navigation.navigate('NotFound');
      }}
      />
      <View style={styles.button}>
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
  },
  button: {
    justifyContent: 'center',
    width: Dimensions.get('window').width
    }
});
