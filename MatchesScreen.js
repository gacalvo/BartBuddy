import React from 'react';
import { AppRegistry, Button, Text, ScrollView, StyleSheet,  View, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
    createBottomTabNavigator, 
    createMaterialBottomTabNabavigator, 
    createStackNavigator, 
    createAppContainer, 
    NavigationEvents 
} from "react-navigation";




styles=StyleSheet.create({
    scroller: {
        flex: 1,
    }
});

export default class MatchesScreen extends React.Component 
{

  constructor(props) {
    super(props)



    this.state = { 
      user_data: null,
      information_complete: false,
      user_scores: null, 
      top_user_id: null,
      
       
    }
  }

  
  
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

  componentDidMount() {
    const information_complete = this.props.navigation.getParam("information_complete")
    


    if (information_complete) {
      this.findUserMatches();

    }

    this.setState({ 
      information_complete
    })
  }


  findUserMatches = () => {



    AsyncStorage.getAllKeys( (err, user_ids) => {
      AsyncStorage.multiGet(user_ids, (error, stores) => {
        let user_data = {}

        stores.map((result, i, store) => {

          // user_data[result[0]] = result[1]
          user_data[result[0]] = JSON.parse(result[1])


          return true;
        });

        
        this.setState(
          { user_data }, 
          this.matchBuddies
        )
      })
    })
  }

  matchBuddies = () => {
    const current_user_id = this.props.navigation.getParam("user_id");
    const current_user_data = this.state.user_data[current_user_id]
    let match_score = 0
    let user_scores = {}
    for (const [user_id, user_data] of Object.entries(this.state.user_data)) {
      if (user_id !== current_user_id){
        if (user_data["tod"] == current_user_data["tod"]){
          match_score += 1
        }
        if(user_data["start_station"] == current_user_data["start_station"]){
          match_score += 1
        }
        if(user_data["gwc_program"] == current_user_data["gwc_program"]){
          match_score += 1
        }
      }

      user_scores[user_id] = match_score
      
      
      match_score = 0

      

    }
    let top_user_id = null
    let best_score = -1
    for (const [user_id, user_score] of Object.entries(user_scores)){
      if (user_score > best_score){
        top_user_id = user_id
        best_score = user_score
      }
      
    
    }
    this.setState(
      { top_user_id }
    )

    

  }

  
  

  render() {

    if (this.state.information_complete && this.state.top_user_id !== null) {
      
      const top_user= this.state.user_data[this.state.top_user_id]

      return (

        <ScrollView 
          style={{
            flex: 1, 
            alignItems: "center", 
            justifyContent: "center",
            backgroundColor: "#f6f6f6",
          }}
        >
          <Text style ={{
            fontColor: '#0000b3',
            fontSize: 30,
            marginBottom: 50
          }}>
            <Text >
            {top_user.full_name}
            </Text>
          </Text>
          <Text style ={{
            marginBottom: 30
          }}>
            <Text >
              {top_user.email}
            </Text>
          </Text>
          <Text style ={{
            marginBottom: 30
          }}>
            <Text >
              {top_user.start_station}
            </Text>
          </Text>
          <Text style ={{
            marginBottom: 30
          }}>
            <Text >
              {top_user.gwc_program}
            </Text>
          </Text>
          <Text style ={{
            marginBottom: 30
          }}>
            <Text >
              {top_user.tod}
            </Text>
          </Text>
          
        </ScrollView>
      );
      // if (match_score_3){
      //   return (
      //     <ScrollView 
      //       style={{
      //         flex: 1, 
      //         alignItems: "center", 
      //         justifyContent: "center",
      //         backgroundColor: "#f6f6f6",
      //       }}
      //     >
      //       <Text >
      //         match 3/3
      //       </Text>
      //       <Text >
      //         {this.props.user_scores}
      //       </Text>
      //     </ScrollView>
      //   );
      // }
      // if(match_score_2){
      //   return (
      //     <ScrollView 
      //       style={{
      //         flex: 1, 
      //         alignItems: "center", 
      //         justifyContent: "center",
      //         backgroundColor: "#f6f6f6",
      //       }}
      //     >
      //       <Text >
      //         <Text>match 2/3</Text>
      //       </Text>
      //     </ScrollView>
      //   );

      // } 
      // if(match_score_1){
      //   return (
      //     <ScrollView 
      //       style={{
      //         flex: 1, 
      //         alignItems: "center", 
      //         justifyContent: "center",
      //         backgroundColor: "#f6f6f6",
      //       }}
      //     >
      //       <Text >
      //         <Text>match 1/3</Text>
      //       </Text>
      //     </ScrollView>
      //   );
      // }
        
    }
    else {
      return (
        <View 
          style={{
            flex: 1, 
            alignItems: "center", 
            justifyContent: "center",
            backgroundColor: "#f6f6f6",
          }}
        >
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
}
  

