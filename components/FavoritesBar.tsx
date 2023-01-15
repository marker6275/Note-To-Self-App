import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { View, Text } from './Themed';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

const FavBar = (props: any) => {
    
    const [home, setHome] = useState(props.home);
    const [fav, setFav] = useState(!props.home);

    function changeFav() {
        props.onPress();
    }

    function changeHome() {
        props.onPress1();
    }

    function changeSelectedHome() {
        home ? null : changeHome();
    }

    function changeSelectedFav() {
        fav ? null : changeFav();
    }

    var homeStyle = {
        flex: 1,
        fontSize: 25,
        backgroundColor: home ? '#ADD8E6' : 'grey',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }

    var favStyle = {
        flex: 1,
        fontSize: 25,
        backgroundColor: fav ? '#ADD8E6' : 'grey',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
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
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    favorites: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    ContainerTrue: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: Dimensions.get('window').width / 2
    },
    bar: {
        flexDirection: 'row',
        margin: 15,
        backgroundColor: 'transparent'
    }
})
export default FavBar;