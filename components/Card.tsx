import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { View, Text} from './Themed'

export default function Card(props: any) {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.card}>
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: Dimensions.get('window').width / 2 - 30,
        width: Dimensions.get('window').width / 2 - 30,
        backgroundColor: 'green',
        margin: 15,
        borderRadius: 5,
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
})