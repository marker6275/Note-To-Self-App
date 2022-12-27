import { StyleSheet, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import { View, Text } from './Themed'
import { FontAwesome } from '@expo/vector-icons';
import { getBackgroundColorAsync } from 'expo-system-ui';

export default function Card(props: any) {
    const [icon, setIcon] = useState("star-o");

    global.icon = icon

    const changeIcon = () => {
        icon === "star" ? setIcon("star-o") : setIcon("star");
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
                width: (Dimensions.get('window').width / 2 - 30) / 3
              })}>
              <FontAwesome
                name={global.icon}
                size={25}
                color={'green'}
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
        backgroundColor: '#FBE0C3',
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