import React from 'react';
import { Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
    createBottomTabNavigator, 
    createMaterialBottomTabNabavigator, 
    createStackNavigator, 
    createAppContainer, 
    NavigationEvents 
} from "react-navigation";
import { users } from './App';

export default class MatchesScreen extends React.Component 
{
  static navigationOptions = {
    title: "My matches",
    headerStyle: {
      backgroundColor: '#0000b3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: "Futura",
    },
  };


  render() {
    return (
      <View style={{
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "#f6f6f6",
        }}>
        <Text >
            <Text>No matches yet...</Text>
        </Text>

        <Text style={{color: 'gray'}}>
          <Text>Submit your information in the My Profile tab.</Text>  
        </Text>
        
 
      </View>
    );
  }
}
