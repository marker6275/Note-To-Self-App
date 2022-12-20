import { View, Text } from './Themed';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Card from './Card';

export default function AddButton(props: any) {
    const cardList = [
        {
          id: 1,
          card: <Card onPress={props.onPress} text={"card"}/>
        }];
    
    const [cards, setCards] = useState(cardList);

    function addCards() {
        const newList = cards.concat(
        {
            id: cards.length + 1,
            card: <Card onPress={props.onPress} text={cards.length + 1}/>
        })

        setCards(newList);
    }

    return (
        <View>
            {cards.map((c) => {
                return (
                    <View key={c.id}>
                        {c.card}
                    </View>
                );
                })}
            <TouchableOpacity style={styles.container} onPress={addCards}>
                <Text style={styles.text}>+</Text>
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