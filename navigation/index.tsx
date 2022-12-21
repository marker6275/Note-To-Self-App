/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import SettingsScreen from '../screens/Settings';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/Homescreen';
import TabTwoScreen from '../screens/ActionPlan';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ExtraHelp from '../Action Plans/ExtraHelp';
import Plan3 from '../Action Plans/Plan3';
import Plan2 from '../Action Plans/Plan2';
import Plan1 from '../Action Plans/Plan1';

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
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Homescreen" component={TabOneScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="ExtraHelp" component={ExtraHelp} options={{title: "I Need Extra Help"}} />
      <Stack.Screen name="Grade1" component={Plan1} options={{title: ' '}}/>
      <Stack.Screen name="Grade2" component={Plan2} options={{title: ' '}}/>
      <Stack.Screen name="Grade3" component={Plan3} options={{title: ' '}}/>
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
        tabBarActiveTintColor: '#FBE0C3',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#344648',
        tabBarInactiveBackgroundColor: '#344648',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#344648'
        }
      }}>
      <BottomTab.Screen
        name="Homescreen"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Homescreen'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="ActionPlan"
        component={TabTwoScreen}
        options={{
          title: 'Action Plans',
          tabBarIcon: ({ color }) => <TabBarIcon name="clipboard" color={color} />,
        }}
      />
      <BottomTab.Screen 
      name="Settings" 
      component={SettingsScreen}
      options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color}/>
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
