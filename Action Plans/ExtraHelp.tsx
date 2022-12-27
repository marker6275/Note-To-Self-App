import { StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import {Linking} from 'react-native'
import SendSMS from 'react-native-sms'

export default function ExtraHelp({ navigation }: RootStackScreenProps<'ExtraHelp'>) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Crisis Hotline</Text>
      <Text style={styles.text}>Text "HOME" to <Text style={styles.phone} onPress={()=>{Linking.openURL('tel:+1(832)945-8288');}}>741741</Text> NEED TO FIX</Text>

      <Text style={styles.separator}/>
      <Text style={styles.title}>National Suicide Prevention Lifeline</Text>
      {/* NEED TO CHANGE PHONE NUMBER LATER */}
      <Text>Don't press this button</Text>
      <Text style={styles.text}>Call <Text style={styles.phone} onPress={()=>{Linking.openURL('tel:+1(832)945-8288');}}>988</Text> NEED TO FIX</Text>

      <Text style={styles.separator}/>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('http://maps.apple.com/?q=Emergency+Room')}>
        <Text style={styles.title}>Find the nearest emergency room</Text>
      </TouchableOpacity>

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
  text: {
    fontSize: 15
  },
  phone: {
    fontSize: 16,
    color: '#7BB0E5',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#FFBB98',
    padding: 10,
    borderRadius: 10,
},
});
