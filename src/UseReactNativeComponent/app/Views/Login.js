import React from  'react'
import {
StyleSheet,
Text,
View,
TextInput,
TouchableHighlight,
Alert,
AsyncStorage
} from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage'

export class Login extends React.Component{

    static navigationOptions={
        header:null
    }

    constructor (props){
        super(props)
        this.state={
            userName:'',
            password:'',
           
        }


    }

    cancelLogin=()=>{
        Alert.alert("Login cancelled");
        this.props.navigation.navigate("HomeRT")
    }
    loginUser=()=>{
      
        if(!this.state.userName){
            Alert.alert("Please enter username");

        }else if(!this.state.password){

            Alert.alert("please enter  password ");
        } 
        else{
            AsyncStorage.getItem('userLoggedIn',(err,result)=>{
                if(result!=='none'){
                    Alert.alert(`Someone already loggedIn`);
                    this.props.navigation.navigate('HomeRT');
                     
                }else{
                    AsyncStorage.getItem(this.state.userName,(err,result)=>{
                        if(result!==null){
                            if(result!=this.state.password){
                                Alert.alert("Password Incorrect");
                            }else{
                                AsyncStorage.setItem('userLoggedIn',this.state.userName,(err,result)=>{
                                    Alert.alert(`${this.state.userName}  logged in`);
                                });
                            }
                             
                        }else{
                            Alert.alert(`No account for ${this.state.userName}`)
                        }
                    });
                }

            })
        }

    }

    render (){
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>

                
                <TextInput 
                placeholder='Enter Username'
                style={styles.inputs}
                onChangeText={(text)=>{this.setState({'userName':text})}}
                value={this.state.userName}

                />
                <TextInput  placeholder='Enter Password'
                style={styles.inputs}
                onChangeText={(text)=>{this.setState({'password':text})}}
                value={this.state.password}
                secureTextEntry={true}

                />
              
            
                <TouchableHighlight onPress={this.loginUser} underlayColor='31e981'>
                   <Text style={styles.buttons}>
                        Login
                   </Text>


                </TouchableHighlight>
                <TouchableHighlight onPress={this.cancelLogin} underlayColor='31e981'>
                   <Text style={styles.buttons}>
                    Cancel
                   </Text>

                </TouchableHighlight>

            </View>
        )
          
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingBottom:'45%',
        paddingTop:'10%'

    },
    heading:{
        fontSize:16,
        flex:1

    },
    inputs:{

        width:'80%',
        padding:10,
        borderBottomWidth:1,
     

    },
    label:{
        paddingBottom:10

    },
    buttons:{
        marginTop:15,
        fontSize:16

    }


});