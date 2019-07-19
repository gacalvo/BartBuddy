import React from 'react';
import { Button, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
    createBottomTabNavigator, 
    createMaterialBottomTabNabavigator, 
    createStackNavigator, 
    createAppContainer, 
    NavigationEvents 
} from "react-navigation";
import { users } from './App';



export default class MyInfoScreen extends React.Component 
{
  static navigationOptions = {
    title: "My Info",
    headerStyle: {
      backgroundColor: '#0000b3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: "Futura",
    fontSize: 20,
    },
  };


  render() {
    return(
      <View style={{ 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: '#f6f6f6',
        }}>
        <Text style={{
            color: '#0000b3',
            fontWeight: 'bold',
            fontFamily: "Futura",
            fontSize: 16,
            marginBottom: 10,
            }}>
          <Text>My Information</Text>
        </Text>

        <Text style={{
            color: '#708090',
            fontFamily: "Futura",
            }}>
          <Text>Full Name: </Text>
        </Text>

        <TextInput 
          style={{
            height: 40, 
            width: 200, 
            borderColor: 'gray', 
            borderWidth: 1,
            backgroundColor: 'white',
        }} 
          
        />

        <Text style={{
            color: '#708090',
            fontFamily: "Futura",
            }}>
          <Text>Age: </Text>
        </Text>

        <TextInput 
          style={{
            height: 40, 
            width: 200, 
            borderColor: 'gray', 
            borderWidth: 1,
            backgroundColor: 'white',
        }} 
        />

        <Text style={{
            color: '#708090',
            fontFamily: "Futura",
            }}>
          <Text>Bart Line: </Text>
        </Text>

        <TextInput 
          style={{
            height: 40, 
            width: 200, 
            borderColor: 'gray', 
            borderWidth: 1,
            backgroundColor: 'white',
        }} 
        />

        <Text style={{
            color: '#708090',
            fontFamily: "Futura",
            }}>
          <Text>GWC Program: </Text>
        </Text>

        <TextInput 
          style={{
            height: 40, 
            width: 200, 
            borderColor: 'gray', 
            borderWidth: 1,
            backgroundColor: 'white',
        }} 
        />
        
        <Text style={{
            color: '#708090',
            fontFamily: "Futura",
            }}>
          <Text>When you need a Buddy: </Text>
        </Text>

        <TextInput 
          style={{
            height: 40, 
            width: 200, 
            borderColor: 'gray', 
            borderWidth: 1,
            backgroundColor: 'white',
        }} 
        />

        
      </View>  
    );
  }
}

