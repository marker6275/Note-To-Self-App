import { StyleSheet } from 'react-native';

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
      <Button title="Grade 1" onPress={() => navigation.navigate('NotFound')}/>
      <Button title="Grade 2" onPress={() => navigation.navigate('Grade2')}/>
      <Button title="Grade 3" onPress={() => navigation.navigate('Grade3')}/>

      <Button title="I need extra help" onPress={() => navigation.navigate('ExtraHelp')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
