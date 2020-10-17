import React from 'react';
import {Platform, StyleSheet, Text, View,Image,AsyncStorage, Alert} from 'react-native'


export class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false,
        loggedUser:false}

    }

    toogleUser=()=>{
       if(this.state.isLoggedIn){
           AsyncStorage.setItem('userLoggedIn','none',(err,result)=>{
               this.setState({
                   isLoggedIn:false,
                   loggedUser:false
               });
               Alert.alert("User logged Out")
           })
       }else{
           this.props.navigate("LoginRT");
       }

    }

    componentDidMount(){
        AsyncStorage.getItem('userLoggedIn',(err,result)=>{
            if(result !==null && result!=='none' ){
                this.setState({
                    isLoggedIn:true,
                    loggedUser:result
                });
            }else{
                AsyncStorage.setItem('userLoggedIn','none',(err,result)=> {});
            }
        })
    }

    render (){
        let display=this.state.isLoggedIn ? this.state.loggedUser:this.props.message;
       return (
           <View  style={styles.headStyle}>
               <Image style={styles.logoStyle} source={require('./img/logo.png')}></Image>
                 <Text style={styles.headText} onPress={this.toogleUser}>
            {display}
        </Text>
           </View>
      )
    }


}

const styles=StyleSheet.create({
    headText:{
        textAlign:'right',
        color:'#ffffff',
        fontSize:20,
        flex:1,
       
    },
headStyle:{
    paddingTop:30,
 
    paddingRight:10,
    backgroundColor:Platform.OS==='android' ? '#31e981': '#35605a',
    flex:1,
    flexDirection:'row',
    borderBottomWidth:2,
    borderBottomColor:"#000000"

},
logoStyle:{
    flex:1,
    height:undefined,
    width:undefined
}
})

