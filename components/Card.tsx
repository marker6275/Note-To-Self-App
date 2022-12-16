import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { View, Text} from './Themed'

export default function Card(props: any) {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.card}>
                <Text style={styles.text}>
                    CARD
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: Dimensions.get('window').width / 2 - 15,
        width: Dimensions.get('window').width / 2 - 15,
        backgroundColor: 'green',
        margin: 15,
        alignContent: 'center',
        borderRadius: 5,
    },
    text: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 35,
        left: (Dimensions.get('window').width / 2 - 15) / 4,
        paddingTop: 10
    },
    title: {
        fontSize: 35,
        alignContent: 'center'
    },
})