/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/Account';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import SettingsScreen from '../screens/Settings';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/Homescreen';
import TabTwoScreen from '../screens/ActionPlan';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import Notifications from '../screens/Notifications';
import LinkingConfiguration from './LinkingConfiguration';
import ExtraHelp from '../Action Plans/ExtraHelp';
import Plan3 from '../Action Plans/Plan3';
import Plan2 from '../Action Plans/Plan2';
import Plan1 from '../Action Plans/Plan1';
import Congrats from '../screens/Congrats';
import Favorites from '../screens/Favorites';
import AddCard from '../screens/AddCardScreen';
import Login from '../screens/Login';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false, animation: 'slide_from_bottom' }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }}/>
      <Stack.Screen name="Homescreen" component={TabOneScreen} options={{ title: 'Home' }}/>
      <Stack.Screen name="ExtraHelp" component={ExtraHelp} options={{ title: "I Need Extra Help" }}/>
      <Stack.Screen name="Notifs" component={Notifications} options={{ title: '' }}/>
      <Stack.Screen name="Account" component={Account} options={{ title: 'Account' }}/>
      <Stack.Screen name="Grade1" component={Plan1} options={{ title: 'Grade 1' }}/>
      <Stack.Screen name="Grade2" component={Plan2} options={{ title: 'Grade 2' }}/>
      <Stack.Screen name="Grade3" component={Plan3} options={{ title: 'Grade 3' }}/>
      <Stack.Screen name="Congrats" component={Congrats} options={{ title: ' ', headerBackVisible: false, animation: 'fade' }}/>
      <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Favorites', animation: 'none', headerBackVisible: false }}/>
      <Stack.Screen name="AddCard" component={AddCard} options={{title: 'Add a card'}}/>
      <Stack.Screen name="Login" component={Login} options={{title: ' '}}/>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  
  return (
    <BottomTab.Navigator
      initialRouteName="Homescreen"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#ADD8E6',
        },
        tabBarActiveBackgroundColor: '#ADD8E6',
        tabBarInactiveBackgroundColor: '#ADD8E6',
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: '#ADD8E6'
        },
      }}>
      <BottomTab.Screen
        name="Homescreen"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Homescreen'>) => ({
          title: 'What makes you smile?',
          tabBarItemStyle: {
          },
          tabBarIcon: ({ color }) => <Feather name="smile" size={24} color={color} />,
        })}
      />
      <BottomTab.Screen
        name="ActionPlan"
        component={TabTwoScreen}
        options={{
          title: 'Action Plans',
          tabBarIcon: ({ color }) => <Feather name="check" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen 
      name="Settings" 
      component={SettingsScreen}
      options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => <Feather name="settings" size={22} color={color} />
      }} />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}
