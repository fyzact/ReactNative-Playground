
import React from 'react';
import { Header } from "../sections/Header";
import {StyleSheet,Text,View, TextInput, TouchableHighlight,Alert} from 'react-native'

export class Contact extends React.Component{
    static navigationOptions={
        header:null
    };
    constructor(props){
        super(props);
        this.state={
            msg:'Enter Message',
            name:'Enter Name',
            email:'Enter your email Address'
        }

    }

    clearFields=()=>this.setState({ msg:'',
    name:'',
    email:''});

    sendMessage=()=>{
        Alert.alert(this.state.name,this.state.msg);
        this.props.navigation.goBack();
    }

    render (){
        const {navigate}=this.props.navigation;
        return (
            <View style={styles.container}>
                <Header navigate={navigate} message='Press to Login'></Header>
                <Text style={styles.heading} >
               Contact Uss
                </Text>
                <TextInput 
                style={styles.inputs}
                onChangeText={(text)=>this.setState({name:text})}
                 placeholder={this.state.name}></TextInput>
                    <TextInput 
                style={styles.multiInputs}
                onChangeText={(text)=>this.setState({msg:text})}
                 placeholder={this.state.msg} 
                 multiline={true} numberOfLines={4}></TextInput>
                  <TextInput 
                style={styles.inputs}
                onChangeText={(text)=>this.setState({email:text})}
                 placeholder={this.state.email}></TextInput>
                 <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981' >
                     <Text style={styles.buttons}>
                         Send Message
                     </Text>
                 </TouchableHighlight>
              
                 <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981' >
                     <Text style={styles.buttons}>
                         Reset Form
                     </Text>
                 </TouchableHighlight>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingBottom:'45%',

    },
    heading:{
        // flex:1,
        fontSize:16

    },
    inputs:{
        // flex:1,
        width:'80%',
        padding:10,
        borderBottomWidth:1
    },
    multiInputs:{
        // flex:2,
        width:'90%',
        paddingTop:20,
        borderBottomWidth:1
    },
    buttons:{
        marginTop:15,
        fontSize:16
    }
})