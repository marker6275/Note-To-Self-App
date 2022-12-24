import { TextInput } from 'react-native';
import { View, Text } from '../components/Themed';
import { useState } from 'react';
import { RootStackScreenProps } from '../types';

export default function AddCard({ navigation }: RootStackScreenProps<'AddCard'>) {
    const [text, setText] = useState('');
    
    function showText() {
        <View>
            <Text style={{padding: 10, fontSize: 42}}>
                {text.split(' ').map((word) => word).join(' ')}
            </Text>
        </View>
    }
    return (
        <View>
            <TextInput
                style={{height: 40, color: 'white'}}
                placeholder="Type here to add text!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                clearButtonMode='while-editing'
                onSubmitEditing={showText}
            />
        </View>
    )
}