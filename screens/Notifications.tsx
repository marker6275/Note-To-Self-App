import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import Button from '../components/Button';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function Notifications({ navigation }: RootStackScreenProps<'Notifs'>) {
  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>Notifications</Text>
        <View style={styles.separator} lightColor="transparent" darkColor="transparent" />
        
        <Button title="Weekly" onPress={() => navigation.navigate('NotFound')}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Button title="Monthly" onPress={() => navigation.navigate('NotFound')}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Button title="Calendar" onPress={() => navigation.navigate('NotFound')}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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
  separator: {
    marginTop: 10,
    marginBottom: 30,
    height: 1,
    width: '80%',
  },
});
