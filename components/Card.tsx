import { StyleSheet, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import { View, Text } from './Themed'
import { FontAwesome } from '@expo/vector-icons';
import { getBackgroundColorAsync } from 'expo-system-ui';
import App from '../App';
import Star from './Star';

export default function Card(props: any) {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.card}>
            <Text style={styles.text}>
                {props.text}
            </Text>
            <Star/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        height: Dimensions.get('window').width / 2 - 30,
        width: Dimensions.get('window').width / 2 - 30,
        backgroundColor: '#FBE0C3',
        margin: 15,
        borderRadius: 5,
        display: 'flex'
    },
    text: {
        flex: 1,
        fontSize: 35,
        textAlign: 'center',
        paddingTop: 4,
        color: '#252525'
    },
    title: {
        fontSize: 35,
        alignContent: 'center'
    },
    star: {
        margin: 15,
    }
})