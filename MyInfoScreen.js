import React from 'react';
import { Button, Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
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
    
    constructor(props) {
        super(props)

        this.state = { 
            full_name: '',
            age: '', 
            bart_line: '', 
            gwc_program: '', 
            tod: '', 



        }
    }

    onFullNameChange = full_name => {
        this.setState({
          full_name
        })
    } 
    
    
    onAgeChange = age => {
    this.setState({
        age
        })
    } 

    onBartLineChange = bart_line => {
    this.setState({
        bart_line
        })
    } 

    onGwcProgramChange = gwc_program => {
        this.setState({
            gwc_program
        })
    } 
    
    onTodChange = tod => {
        this.setState({
            tod
        })
    } 
            
    AddInfo = () => {
        users[4]["full_name"] = this.state.full_name,
        users[4][ "age"] = this.state.age,
        users[4]["bart_line"] = this.state.bart_line,
        users[4]["gwc_program"]= this.state.gwc_program,
        users[4]["tod"]= this.state.tod,

        console.log(users) 
    }
    

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
    // console.log(this.state)
    
    return(
      <ScrollView style={{ 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: '#f6f6f6',
        }}>
        <Text style={{
            color: '#0000b3',
            fontWeight: 'bold',
            fontFamily: "Futura",
            fontSize: 18,
            marginTop: 100,
            marginBottom: 30,
            textAlign: 'center',
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
        onChangeText={this.onFullNameChange}
        value={this.state.full_name}
        // id="full_name"
        placeholder="First Last"
          
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
        // id="age"
        onChangeText={this.onAgeChange}
        value={this.state.age}
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
        onChangeText={this.onBartLineChange}
        value={this.state.bart_line}
        // id="bart_line"
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
        // id="gwc_program"
        onChangeText={this.onGwcProgramChange}
        value={this.state.gwc_program}
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
        onChangeText={this.onTodChange}
        value={this.state.tod}
        // id="tod"
        />

        <TouchableOpacity style={{alignItems: "center"}} onPress={this.AddInfo}>
              <Text  style={{
            borderColor: "#0000b3",
            width: 140,
            backgroundColor: '#0000b3',
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: 18,
            textAlign: "center", 
            fontFamily: "Futura",
            marginTop: 30,
            }}>
                <Text>UPDATE</Text>
              </Text>

          </TouchableOpacity>

          <Text> </Text>
        
      </ScrollView>  
    );
  }

  

//         users.push(user_id);

}



