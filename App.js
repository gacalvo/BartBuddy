import React from 'react';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
  createBottomTabNavigator, 
  createMaterialBottomTabNabavigator, 
  createStackNavigator, 
  createAppContainer, 
  NavigationEvents 
} from "react-navigation";
import LoginScreen from './LoginScreen';
import MatchesScreen from './MatchesScreen';
import MyInfoScreen from './MyInfoScreen';



export const users = {
  "0": {
    "username": "bob",
    "password": "pink",
  },
  "1": {
    "username": "alex",
    "password" : "red",

  }, 
  "2": {
    "username": "tammy",
    "password": "orange",
  }, 
  "3": {
    "username": "esha",
    "password": "yellow",
  },
  "4": {
    "username": "gabriela",
    "password": "green",
  },

}


const HomeNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: { title: 'BART Buddy👥' }
  },
  MyInfo:{
    screen: MyInfoScreen,
    navigationOptions: { title: "BART Buddy👥"}
  },
})

const DetailsNavigator = createStackNavigator({
  Matches: {
    screen: MatchesScreen,
    navigationOptions: { title: 'BART Buddy👥'}
  }
})

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: 'My Profile',
    },
  },
  Details : {
    screen: DetailsNavigator,
    navigationOptions: {
      tabBarLabel: 'My Matches',
    },
  },
})


export default createAppContainer(TabNavigator);