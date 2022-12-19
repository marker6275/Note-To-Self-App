import { View, Text } from './Themed';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Card from './Card';

export default function AddButton(props: any) {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Text style={styles.text}>{props.length}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        height: 50,
        width: 50,
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 55
    }
})