import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
  
const CheckBox = (props: any) => {
    const iconName = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";
    const color = props.color;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color='blue' />
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
        color: 'blue'
    },
    title: {
        color: 'blue',
        fontSize: 16,
        marginLeft: 5,
        fontWeight: "600",
    },
});