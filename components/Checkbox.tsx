import { StyleSheet, Text, View, TouchableOpacity, Appearance } from "react-native";
import { useState, useCallback, useEffect } from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
  
// IMPORTANT
// I can't get it to change colors based on light or dark, we should probably set a universal background color later
const CheckBox = (props: any) => {
    const iconName = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color='blue'/>
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
        width: 150,
        marginTop: 5,
        marginHorizontal: 5,
        color: 'blue',  
    },
    title: {
        color: 'blue',
        fontSize: 16,
        marginLeft: 5,
        fontWeight: "600",
    },
});