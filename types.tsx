/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ListAccordionGroupContextType } from 'react-native-paper/lib/typescript/components/List/ListAccordionGroup';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
  var cards: any;
  var favList: any;
  var id: any;
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
  Homescreen: undefined;
  ExtraHelp: undefined;
  Grade1: undefined;
  Grade2: undefined;
  Grade3: undefined;
  Notifs: undefined;
  Account: undefined;
  Congrats: undefined;
  Favorites: undefined;
  AddCard: undefined;
  Login: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Root: undefined;
  Homescreen: undefined;
  ActionPlan: undefined;
  Settings: undefined;
  NotFound: undefined;
  Favorites: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;