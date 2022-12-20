import { SafeAreaView, FlatList, StyleSheet, StatusBar, Image } from 'react-native';
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
      <Image style={styles.image} source={require('../images/YGiGgYcRBAKygdJ2ugvb.webp')} />
      <Button title="Grade 1 Action Plan" onPress={() => navigation.navigate('Grade1')}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Image style={styles.image} source={require('../images/YGiGgYcRBAKygdJ2ugvb.webp')}/>
      <Button title="Grade 2 Action Plan" onPress={() => navigation.navigate('Grade2')}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Image style={styles.image} source={require('../images/YGiGgYcRBAKygdJ2ugvb.webp')}/>
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