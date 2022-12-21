import { StyleSheet, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import { View, Text } from './Themed'
import { FontAwesome } from '@expo/vector-icons';

export default function Card(props: any) {
    const [icon, setIcon] = useState("star-o");

    function changeIcon() {
        icon === "star-o" ? setIcon("star") : setIcon("star-o");
    }
    
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.card}>
            <Text style={styles.text}>
                {props.text}
            </Text>
            <Pressable
              onPress={changeIcon}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name={icon}
                size={25}
                color={'white'}
                style={styles.star}
              />
            </Pressable>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: Dimensions.get('window').width / 2 - 30,
        width: Dimensions.get('window').width / 2 - 30,
        backgroundColor: '#344648',
        margin: 15,
        borderRadius: 5,
        display: 'flex'
    },
    text: {
        flex: 1,
        fontSize: 35,
        textAlign: 'center',
        paddingTop: 4
    },
    title: {
        fontSize: 35,
        alignContent: 'center'
    },
    star: {
        margin: 15,
    }
})