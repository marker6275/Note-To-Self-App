import { View, Text } from '../components/Themed';
import { StyleSheet, Linking, Pressable, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import { useLinkProps, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckBox from '../components/Checkbox';

export default function APE() {
    return (
        <ScrollView style={styles.containerBox} contentContainerStyle={styles.container}>
            <Text style={styles.title}>What are action plans?</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            
            <View style={styles.box}>
                <Text style={styles.text}>Brief explanation of what action plans are</Text>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                <Text style={styles.text}>Grade 1 Explanation</Text>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                <Text style={styles.text}>Grade 2 Explanation</Text>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                <Text style={styles.text}>Grade 3 Explanation</Text>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.box}>
                <Text style={styles.text}>Extra Help Explanation</Text>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 30,
        paddingBottom: 70,
        flex: 1,
    },
    containerBox: {
        marginHorizontal: 10,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 20,
      height: 1,
      width: '80%',
    },
    text: {
        fontSize: 19,
        fontWeight: 'normal',
    },
    emphasis: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    checklist: {
        color: '#fff',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#ADD8E6',
        padding: 10,
        borderRadius: 10,
    },
    box: {
        backgroundColor: '#FCFAA6',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
    }
})