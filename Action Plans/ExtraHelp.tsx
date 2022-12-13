import { StyleSheet, Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Linking} from 'react-native'
import SendSMS from 'react-native-sms'

export default function ExtraHelp({ navigation }: RootTabScreenProps<'ExtraHelp'>) {
    // I can't get this to work
    // function sendSMS() {
    //     SendSMS.send({
    //             body: 'HELLO',
    //             recipients: ['8329458288'],
    //         },
    //         (completed, cancelled, error) => {
    //             if (completed) {
    //                 console.log('SMS Sent Completed')
    //             } else if (cancelled || error) {
    //                 console.log('ERROR')
    //             }
    //         }
    //     );
    // }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crisis Hotline</Text>
      <Text style={styles.text}>Text "HOME" to 741741</Text>
      <Text style={styles.separator}/>
      <Text style={styles.title}>National Suicide Prevention Lifeline</Text>
      {/* NEED TO CHANGE PHONE NUMBER LATER */}
      <Text style={styles.text}>Call <Text style={styles.phone} onPress={()=>{Linking.openURL('tel:8329458288');}}>988</Text> NEED TO FIX</Text>
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
  }
});
