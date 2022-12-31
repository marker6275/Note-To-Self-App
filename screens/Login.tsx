import { View, Text } from '../components/Themed';
import { TextInput, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

export default function Login() {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    function showText() {
        <View>
            <Text style={{padding: 10, fontSize: 42}}>
                {text.split(' ').map((word) => word).join(' ')}
            </Text>
        </View>
    }

    function showPassword() {
        <View>
            <Text style={{padding: 10, fontSize: 42}}>
                {password.split(' ').map((word) => word).join(' ')}
            </Text>
        </View>
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/flower.png')} />
            <Text style={styles.title}>Hello.</Text>
            <Text style={styles.subtitle}>Welcome to Note To Self.</Text>
            <TextInput
                style={{height: 50, 
                    color: 'black', 
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 15,
                    // marginHorizontal: 20,
                }}
                placeholder="Username"
                placeholderTextColor={'grey'}
                onChangeText={(newText) => setText(newText)}
                defaultValue={text}
                // textAlign="center"
                clearButtonMode='while-editing'
                // onSubmitEditing={showText}
            />
            <TextInput
                style={{height: 50, 
                    color: 'black', 
                    backgroundColor: 'white',
                    // marginHorizontal: 20,
                    marginTop: 25,
                    padding: 10,
                    borderRadius: 15,
                }}
                placeholder="Password"
                placeholderTextColor={'grey'}
                onChangeText={newText => setPassword(newText)}
                defaultValue={password}
                // textAlign="center"
                multiline={false}
                clearButtonMode='while-editing'
                // onSubmitEditing={showPassword}
            />
        <Text>
            {text}
            {password}
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
      backgroundColor: 'lightpink',
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      marginBottom: 10,
      alignSelf: 'center',
    },
    subtitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
        alignSelf: 'center',
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
      width: 75,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
  });