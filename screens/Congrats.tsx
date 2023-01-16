import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function Congrats({ navigation }: RootStackScreenProps<'Congrats'>) {
  const emojis = ['😀', '😃', '😄', '😊', '😍', '😘', '😜', '😎', '🙂', '🤗', '🤩', '🙂', '😇', '😋', '😛', '🤔', '😎', '😉']
  const randomIndex = Math.floor(Math.random() * emojis.length);

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require('../images/flower.png')} /> */}
      <Text style={styles.emoji}>{emojis[randomIndex]}</Text>
      <Text style={styles.title}>Congrats! We're proud of you.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Return to home screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightgreen',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
  emoji: {
    fontSize: 100,
    marginBottom: 50
  }
});
