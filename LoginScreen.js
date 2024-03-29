import React from 'react';
import { Button, Text, View, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
    createBottomTabNavigator, 
    createMaterialBottomTabNabavigator, 
    createStackNavigator, 
    createAppContainer, 
    NavigationEvents 
} from "react-navigation";
import { users } from './App';



export default class LoginScreen extends React.Component 
{
  constructor(props) {
    super(props)

    this.state = { 
      username: '',
      password: '', 
    }
  }


  static navigationOptions = ({
    title:"My Profile",
    headerStyle: {
      backgroundColor: '#0000b3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: "Futura",
      
    },
  })


  

  componentDidMount() {
    this.setupUser()
  }

  
  setupUser = async () =>{
    try {
      
      const user0_data = await AsyncStorage.getItem("0")

      if (user0_data ==  null){
        await AsyncStorage.setItem('0', JSON.stringify({"username": "bob", "password": "pink",}));
        await AsyncStorage.setItem('1', JSON.stringify({"username": "alex", "password" : "red",}));
        await AsyncStorage.setItem('2', JSON.stringify({"username": "tammy", "password": "orange",}));
        await AsyncStorage.setItem('3', JSON.stringify({"username": "esha", "password": "yellow",}));
        await AsyncStorage.setItem('4', JSON.stringify({"username": "gabriela", "password": "green",}));
        
      }

      // await AsyncStorage.getAllKeys((err, keys) => {
      //   AsyncStorage.multiGet(keys, (error, stores) => {
      //       stores.map((result, i, store) => {
      //           console.log({ [store[i][0]]: store[i][1] });
      //           return true;
      //       });
      //   });
      // });

      

      

    } catch (error) {
      console.error(error)
    }
  }


  onUsernameChange = username => {
    this.setState({
      username
    })
  } 


  onPasswordChange = password => {
    this.setState({
      password
    })
  } 

  _onInvalidLogin= () => {
    Alert.alert(
      'Oops!',
      'Invalid username/password.',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
    
  }

  _onPressSignIn= () => {
    let validLogin = false

    for (const user_id of Object.keys(users)) {
      const username_correct = this.state.username == users[user_id]["username"]
      const password_correct = this.state.password == users[user_id]["password"]

      if (username_correct && password_correct) {
        this.props.navigation.navigate('MyInfo', { user_id: user_id })
        validLogin = true
      } 
    }
    if (!validLogin) {
      this._onInvalidLogin()
    }
    
  }
  

  render() {
    // console.log(this.state)

    return (
      <View style={{ 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "#f6f6f6"
        
      }}>
        <Text style={{
          color: '#0000b3',
          fontWeight: 'bold',
          fontFamily: "Futura",
          fontSize: 18,
          marginBottom: 10,
          textAlign: 'center',
          }}>
        
          <Text>Sign in</Text>
        </Text>


        <TextInput 
          style={{
              height: 40, 
              width: 160, 
              borderColor: 'gray', borderWidth: 1, 
              backgroundColor: 'white',
              marginBottom: 20,
          }}
          onChangeText={this.onUsernameChange}
          value={this.state.username} 
          
          placeholder="username"
        />


        <TextInput 
          style={{
            height: 40,
            width: 160,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: 'white',
            marginBottom: 10,
          }} 
          onChangeText={this.onPasswordChange}
          value={this.state.password}
          placeholder="password"
          secureTextEntry
        />

        <TouchableOpacity onPress={this._onPressSignIn}>
          <Text style={{
            color: '#0000b3',
            fontSize: 30,
            fontFamily: "Futura",
          }}>
            <Text>→</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
  
  
  