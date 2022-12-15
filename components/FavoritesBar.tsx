import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const FavBar = () => {
    return (
    <View style={styles.container}>
        <TouchableOpacity><Text style={styles.title}>Favorites</Text></TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        // fontWeight: 'bold',
        // marginHorizontal: 50
      },
    container: {
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 5,
        // elevation: 3,
        backgroundColor: 'blue',
        // marginBottom: 20
    },
})
export default FavBar;