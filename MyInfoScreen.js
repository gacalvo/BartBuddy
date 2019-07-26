import React from 'react';
import { Button, Text, View, ScrollView, TextInput, TouchableOpacity, Alert, Picker,Select,
    Modal, AsyncStorage
   } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
    createBottomTabNavigator, 
    createMaterialBottomTabNabavigator, 
    createStackNavigator, 
    createAppContainer, 
    NavigationEvents 
} from "react-navigation";



export default class MyInfoScreen extends React.Component 
{

    constructor(props) {
        super(props)



        this.state = { 
            full_name: '',
            email: '', 
            start_station: '', 
            gwc_program: '', 
            tod: '', 
            current_user_id: '',
            startStationModalVisible: false,
            gwcProgramModalVisible: false,
            todModalVisible: false,
            information_complete: false,
        }
    }

    componentDidMount() {
      this.getUserData();

    }

    getUserData = async () =>{
        const user_id = this.props.navigation.getParam("user_id");
        const user_data_raw = await AsyncStorage.getItem(String(user_id));
        const user_data = JSON.parse(user_data_raw);

        // console.log(user_id)

        // console.log(user_data["full_name"])

        this.setState({
            full_name: user_data["full_name"],
            email: user_data["email"],
            start_station: user_data["start_station"],
            gwc_program: user_data["gwc_program"],
            tod: user_data["tod"],
            
        })
    }


    onFullNameChange = full_name => {
        this.setState({
            full_name,
        })
    } 
    
    
    onEmailChange = email => {
        this.setState({
            email,
        })
    } 

    onStartStationFocus = () => {
        this.setState({
            startStationModalVisible: true,
        })
    }

    onStartStationBlur = () => {
        this.setState({
            startStationModalVisible: false
            
        })
        
        
    }

    onStartStationChange = start_station => {
        this.setState({
            start_station,
        })
    } 

    onGWCProgramFocus = () => {
        this.setState({
            gwcProgramModalVisible: true,
        })
    }

    onGWCProgramBlur = () => {
        this.setState({
            gwcProgramModalVisible: false
            
        })
        
        
    }

    onGWCProgramChange = gwc_program => {
        this.setState({
            gwc_program,
        })
    } 

    onTodFocus = () => {
        this.setState({
            todModalVisible: true,
        })
    }

    onTodBlur = () => {
        this.setState({
            todModalVisible: false
            
        })
        
        
    }
    
    onTodChange = tod => {
        this.setState({
            tod
        })
    } 
          
    onPressUpdate = () => {
        this.AddInfo();
        this.checkInformationComplete();

        
    }

   


    AddInfo = async () => {
        const user_id = this.props.navigation.getParam("user_id");
        // console.log(user_id) 

        const user_data = {
            "full_name": this.state.full_name,
            "email": this.state.email,
            "start_station": this.state.start_station,
            "gwc_program": this.state.gwc_program,
            "tod": this.state.tod,
        }

        const user_id_string = String(user_id)

        // console.log(user_id_string)

        await AsyncStorage.mergeItem(user_id_string, JSON.stringify(user_data));

        // await AsyncStorage.getAllKeys((err, keys) => {
        //     AsyncStorage.multiGet(keys, (error, stores) => {
        //         stores.map((result, i, store) => {
        //             console.log({ [store[i][0]]: store[i][1] });
        //             return true;
        //         });
        //     });
        // });
    }


    checkInformationComplete = () => {
        const user_id = this.props.navigation.getParam("user_id")
        // console.log(user_id)

        const full_name_complete = this.state.full_name !== undefined
        const email_complete = this.state.email !== undefined
        const start_station_complete = this.state.start_station !== undefined
        const gwc_program_complete = this.state.gwc_program !== undefined
        const tod_complete = this.state.tod !== undefined

        const infoComplete =
            full_name_complete && 
            email_complete && 
            start_station_complete &&
            gwc_program_complete && 
            tod_complete

        this.setState(
            { information_complete: infoComplete }, 
            this.afterUpdate
        )
    }


    afterUpdate = () => {
        if (this.state.information_complete) {
            const user_id = this.props.navigation.getParam("user_id");
            this.props.navigation.navigate('Matches', { information_complete: true, user_id: user_id })
        } else {
            Alert.alert(
                'Oops!',
                'Incomplete information',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
        }
    }


    getStationItems = () => {
        const stations = [
            '12th St. Oakland City Center',
            '16th St. Mission (SF)',
            '9th St. Oakland',
            '24th St. Mission (SF)', 
            'Antioch Ashby (Berkeley)', 
            'Balboa Park (SF)',
            'Bay Fair (San Leandro)', 
            'Castro Valley',
            'Civic Center / UN Plaza',
            'Coliseum',
            'Colma',
            'Concord',
            'Daly City',
            'Downtown Berkeley',
            'Dublin / Pleasanton',
            'El Cerrito del Norte',
            'El Cerrito Plaza',
            'Embarcadero (SF)',
            'Fremont',
            'Fruitvale (Oakland)',
            'Glen Park (SF)', 
            'Hayward',
            'Lafayette',
            'Lake Merritt (Oakland)',
            'MacArthur (Oakland)', 
            'Millbrae',
            'Montgomery St. (SF)', 
            'North Berkeley',
            'North Concord / Martinez',
            'Oakland International Airport',
            'Orinda',
            'Pittsburg / Bay Point',
            'Pittsburg Center',
            'Pleasant Hill / Contra Costa Centre',
            'Powell St. (SF)',
            'Richmond',
            'Rockridge (Oakland)',
            'San Bruno',
            'San Francisco International Airport', 
            'San Leandro',
            'South Hayward',
            'South San Francisco',
            'Union City',
            'Walnut Creek',
            'Warm Springs / South Fremont',
            'West Dublin / Pleasanton',
            'West Oakland',


        ]

        const serviceItems = stations.map((station_name, index) => {
            return <Picker.Item key={index} value={station_name} label={station_name} />
            
        });

        return serviceItems

    }


    getProgramItems = () => {
        const programs = [
            'Accenture',
            'Adobe',
            'Akamai',
            'Amazon', 
            'American Express', 
            'AT&T',
            'Autodesk',
            'Bank of America',
            'BlackRock', 
            'Blizzard Entertainment', 
            'Cadence',
            'Citrix',
            'CNA',
            'The Depository Trust & Clearing Corporation (DTCC)', 
            'EY', 
            'F5 Networks',
            'First Data',
            'Ford Motor Company',
            'Goldman Sachs', 
            'HSBC', 
            'Intuit', 
            'Johnson & Johnson',
            'JPMorgan Chase & Co.', 
            'Kate Spade New York Foundation',
            'Lightspeed Venture Partners', 
            'MetLife and MetLife Foundation',
            'Moody’s Corporation', 
            'Morgan Stanley',
            'Pfizer Inc', 
            'Procter & Gamble',
            'Prudential Financial', 
            'PwC',
            'Riot Games, Inc', 
            'RBC Capital Markets',
            'Software.org: the BSA Foundation', 
            'State Farm®',
            'Synchrony', 
            'The Walt Disney Company',
            'Twitter', 
            'United Technologies',
            'Viacom', 
            'Walmart',
            'WarnerMedia', 
            'Warner Bros.',
            'Workday', 
            'WW',
            'Xandr', 
            'Georgetown Law',
            'The Idea Center at Miami Dade College', 
            'NYU Tandon School of Engineering',
        

            


        ]

        const programItems = programs.map((program_name, index) => {
            return <Picker.Item key={index} value={program_name} label={program_name} />
            
        });

        return programItems

    }

    getTodItems = () => {
        const tods = [
            'Morning',
            'Afternoon',
            // 'Both',
        

        ]

        const todItems = tods.map((tod, index) => {
            return <Picker.Item key={index} value={tod} label={tod} />
            
        });

        return todItems

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
        // console.log(this.state.full_name)

        return(
            <ScrollView 
                style={{ 
                    flex: 1, 
                    backgroundColor: '#f6f6f6',
                }}
                contentContainerStyle={{
                    alignItems: "center", 
                    justifyContent: "center",
                }}
            >

                <Text style={{
                    color: '#0000b3',
                    fontWeight: 'bold',
                    fontFamily: "Futura",
                    fontSize: 18,
                    marginTop: 100,
                    marginBottom: 30,
                    textAlign: 'center',
                    }}
                >
                <Text>My Information</Text>
                </Text>

            
                <Text style={{
                    color: '#708090',
                    fontFamily: "Futura",
                    }}
                >
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
                
                    placeholder="First Last"
                
                />

                <Text 
                    style={{
                        color: '#708090',
                        fontFamily: "Futura",
                    }}
                >
                    <Text>Email: </Text>
                </Text>

                <TextInput 
                    style={{
                        height: 40, 
                        width: 200, 
                        borderColor: 'gray', 
                        borderWidth: 1,
                        backgroundColor: 'white',
                    }} 
                
                    onChangeText={this.onEmailChange}
                    value={this.state.email}
                />

                <Text style={{
                    color: '#708090',
                    fontFamily: "Futura",
                    }}>
                <Text>Closest Bart Station to Your House: </Text>
                </Text>

                <TextInput 
                    style={{
                        height: 40, 
                        width: 250, 
                        borderColor: 'gray', 
                        borderWidth: 1,
                        backgroundColor: 'white',
                    }} 
                    onFocus={this.onStartStationFocus}
                    value={this.state.start_station}
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
                        width: 250, 
                        borderColor: 'gray', 
                        borderWidth: 1,
                        backgroundColor: 'white',
                    }} 
                    onFocus={this.onGWCProgramFocus}
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
                        width: 250, 
                        borderColor: 'gray', 
                        borderWidth: 1,
                        backgroundColor: 'white',
                    }} 
                    onFocus={this.onTodFocus}
                    value={this.state.tod}
                
                />

                <TouchableOpacity 
                    style={{alignItems: "center"}} 
                    onPress={this.onPressUpdate}
                >
                    <Text  
                        style={{
                            borderColor: "#0000b3",
                            width: 140,
                            backgroundColor: '#0000b3',
                            color: 'white', 
                            fontWeight: 'bold', 
                            fontSize: 18,
                            textAlign: "center", 
                            fontFamily: "Futura",
                            marginTop: 30,
                            marginBottom: 150,
                        }}
                    >
                        <Text>UPDATE</Text>
                    </Text>
                        
                </TouchableOpacity>

                <Text> </Text>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.startStationModalVisible}
                >
                    <Picker selectedValue = {this.state.start_station} onValueChange = {this.onStartStationChange}>
                        {this.getStationItems()}
        
                    </Picker>
                    <TouchableOpacity
                        onPress={this.onStartStationBlur}
                        
                    >
                        <Text  
                        style={{
                            borderColor: "#0000b3",
                            width: 140,
                            backgroundColor: '#0000b3',
                            color: 'white', 
                            fontWeight: 'bold', 
                            fontSize: 22,
                            textAlign: "center", 
                            fontFamily: "Futura",
                            marginTop: 30,
                            marginBottom: 150,
                        }}
                    >
                        <Text>✓</Text>
                    </Text>

                    </TouchableOpacity>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.gwcProgramModalVisible}
                >
                    <Picker selectedValue = {this.state.gwc_program} onValueChange = {this.onGWCProgramChange}>
                        {this.getProgramItems()}
        
                    </Picker>
                    <TouchableOpacity
                        onPress={this.onGWCProgramBlur}
                        
                    >
                        <Text  
                        style={{
                            borderColor: "#0000b3",
                            width: 140,
                            backgroundColor: '#0000b3',
                            color: 'white', 
                            fontWeight: 'bold', 
                            fontSize: 22,
                            textAlign: "center", 
                            fontFamily: "Futura",
                            marginTop: 30,
                            marginBottom: 150,
                        }}
                    >
                        <Text>✓</Text>
                    </Text>

                    </TouchableOpacity>
                </Modal>
                

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.todModalVisible}
                >
                    <Picker selectedValue = {this.state.tod} onValueChange = {this.onTodChange}>
                        {this.getTodItems()}
        
                    </Picker>
                    <TouchableOpacity
                        onPress={this.onTodBlur}
                        
                    >
                        <Text  
                        style={{
                            borderColor: "#0000b3",
                            width: 140,
                            backgroundColor: '#0000b3',
                            color: 'white', 
                            fontWeight: 'bold', 
                            fontSize: 22,
                            textAlign: "center", 
                            fontFamily: "Futura",
                            marginTop: 30,
                            marginBottom: 150,
                        }}
                    >
                        <Text>✓</Text>
                    </Text>

                    </TouchableOpacity>
                </Modal>
            
            </ScrollView>  
        );
    }

}



