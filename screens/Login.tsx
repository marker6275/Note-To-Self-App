import { View, Text } from '../components/Themed';
import { TextInput } from 'react-native';
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
        <View>
        <Text>LOGIN SCREEN</Text>
        <TextInput
            style={{height: 50, 
                color: 'black', 
                backgroundColor: 'white',
                // marginHorizontal: 20,
            }}
            placeholder="Username"
            placeholderTextColor={'blue'}
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
                marginTop: 25
            }}
            placeholder="Password"
            placeholderTextColor={'blue'}
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