import { StyleSheet, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import { View, Text } from './Themed'
import { FontAwesome } from '@expo/vector-icons';
import { getBackgroundColorAsync } from 'expo-system-ui';
import App from '../App';

export default class Card extends React.Component<{onPress: any, text: any, id: any, favorited: any}, {icon: any, favorited: any, lastRefresh: any}> {
    onPress: any | null;
    favorited: any;
    text: any;
    id: any;
    lastRefresh: any;
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.onPress = props.onPress;
        this.favorited = props.favorited;
        this.text = props.text;
        this.id = props.id;
        this.state = {
            icon: "star-o",
            favorited: this.favorited,
            lastRefresh: new Date(Date.now()).toString(),
        };
        this.refreshScreen = this.refreshScreen.bind(this)
    }

    refreshScreen() {
        this.setState({ lastRefresh: new Date(Date.now()).toString() })
    }

    handleClick() {
        this.state.favorited ? this.setState({ icon: "star"}) : this.setState({ icon: "star-o"});
        this.setState({favorited: !this.state.favorited})
        this.refreshScreen;
        if (this.state.favorited) {
            global.id = this.id;
        } else {
            for (let i = 0; i < global.cards.length; i++) {
                if (global.cards[i].id == global.id) {
                    let f = global.cards[i].favorited;
                    global.cards[i] = 
                        {
                            id: i,
                            card: <Card onPress={null} text={i} favorited={!f} id={i}/>
                        }
                }
            }
        }
        
    }
      
    render() {
    return(
        <TouchableOpacity onPress={this.onPress} style={styles.card}>
            <Text style={styles.text}>{String(this.favorited)}</Text>
            <Text style={styles.text}>
                {this.text}
            </Text>
            <Pressable
              onPress={this.handleClick}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                width: (Dimensions.get('window').width / 2 - 30) / 3
              })}>
              <FontAwesome
                name={this.state.icon}
                size={25}
                color={'green'}
                style={styles.star}
              />
            </Pressable>
        </TouchableOpacity>
    );
    }
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