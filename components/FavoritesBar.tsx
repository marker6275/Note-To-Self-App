import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text } from './Themed';
import { useState } from 'react';

// WORK IN PROGRESS
// DOESN'T REALLY WORK
const FavBar = () => {
    const [color, setColor] = useState('orange');
    
    return (
    <View style={styles.container}>
        <TouchableOpacity><Text style={styles.title}>Favorites</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.title}>Favorites</Text></TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    container: {
        borderRadius: 5,
        backgroundColor: 'orange',
        flex: 1,
        flexDirection: 'row'
    },
})
export default FavBar;