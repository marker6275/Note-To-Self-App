import { FontAwesome } from '@expo/vector-icons';
import { getBackgroundColorAsync } from 'expo-system-ui';
import { StyleSheet, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react' 

export default function Star() {
    const [icon, setIcon] = useState("star-o");

    function changeIcon(card: any) {
        icon === "star-o" ? setIcon("star") : setIcon("star-o")
        global.favList = global.cards.filter((item: any) => item.card == card)
    }

    return (
        <Pressable
            onPress={changeIcon}
            style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            width: (Dimensions.get('window').width / 2 - 30) / 3
            })}>
            <FontAwesome
            name={icon}
            size={25}
            color={'green'}
            style={styles.star}
            />
        </Pressable>
        
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
        paddingTop: 4,
        color: '#252525'
    },
    title: {
        fontSize: 35,
        alignContent: 'center'
    },
    star: {
        margin: 15,
    }
})