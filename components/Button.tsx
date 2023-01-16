import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import LinkingConfiguration from '../navigation/LinkingConfiguration';

export default function Button(props: { onPress: any; title?: any | undefined; }) {
    const { onPress, title = ' ' } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}> 
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#FCFAA6',
        marginBottom: 20,
        width: 300,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }

  })