import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import LinkingConfiguration from '../navigation/LinkingConfiguration';

export default function Button(props: { onPress: any; title?: any | undefined; }) {
    const { onPress, title = ' ' } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}> 
            <Text style={styles.text}>{title}</Text>
         </Pressable>
    //     <Button title={title} onPress={onPress}/>
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
        backgroundColor: 'blue',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }

  })