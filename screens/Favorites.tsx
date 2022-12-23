import { View, Text } from '../components/Themed';
import { ScrollView } from 'react-native';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import FavBar from '../components/FavoritesBar';

export default function Favorites({ navigation }: RootStackScreenProps<'Favorites'>) {
    return (
        <ScrollView>
            <FavBar onPress={() => navigation.navigate('Favorites')} onPress1={() => navigation.navigate('Root')} home={false}/>
            <Text>
                Favorites
            </Text>
        </ScrollView>
    )
}