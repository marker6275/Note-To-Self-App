import { StyleSheet, TouchableOpacity, Appearance, Dimensions } from "react-native";
import { View, Text } from './Themed';
import { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CheckBox = (props: any) => {
    const iconName = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <MaterialCommunityIcons 
                //FIGURE OUT HOW TO GET TO SAME COLOR AS TEXT
                //or common color scheme
                    name={iconName} size={40} color={'grey'}/>
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};
  
export default CheckBox;
  
const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: Dimensions.get('window').width / 2,
        marginTop: 5,
        marginHorizontal: 5,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 19,
        marginLeft: 5,
    },
});