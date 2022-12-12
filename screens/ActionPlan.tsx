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
      {/* <Text style={styles.title}>Tab Two</Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />

      <Button title="Grade 1" onPress={() => navigation.navigate('NotFound')}/>
      <Button title="Grade 2" onPress={() => navigation.navigate('NotFound')}/>
      <Button title="Grade 3" onPress={() => navigation.navigate('NotFound')}/>

      <Button title="I need extra help" onPress={() => navigation.navigate('NotFound')}/>

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
