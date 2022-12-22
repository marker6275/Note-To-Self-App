import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { View, Text } from './Themed';
import { useState } from 'react';

// WORK IN PROGRESS
// DOESN'T REALLY WORK
const FavBar = (props: any) => {
    
    const [home, setHome] = useState(true);
    const [fav, setFav] = useState(!home);

    const checker = () => {
        setHome(!home);
        setFav(!fav);
    }

    function changeSelectedHome() {
        home ? null : checker();
    }

    function changeSelectedFav() {
        fav ? null : checker();
    }

    var homeStyle = {
        flex: 1,
        fontSize: 25,
        backgroundColor: home ? 'green' : 'black'
    }

    var favStyle = {
        flex: 1,
        fontSize: 25,
        backgroundColor: fav ? 'green' : 'black'
    }

    return (
    <View style={styles.bar}>
        <View style={homeStyle}>
            <TouchableOpacity onPress={changeSelectedHome}><Text style={styles.home}>Home</Text></TouchableOpacity>
        </View>
        <View style={favStyle}>
            <TouchableOpacity onPress={changeSelectedFav}><Text style={styles.favorites}>Favorites</Text></TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        fontSize: 25,
    },
    favorites: {
        flex: 1,
        fontSize: 25
    },
    ContainerTrue: {
        flex: 1,
        backgroundColor: 'green'
    },
    container: {
        flex: 1,
        width: Dimensions.get('window').width / 2
    },
    bar: {
        flexDirection: 'row'
    }
})
export default FavBar;