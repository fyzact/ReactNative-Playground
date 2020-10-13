
import React from "react"
import { View,StyleSheet,Text } from "react-native";
 import { Header } from "../sections/Header.js";


 export class Home extends React.Component{
     render(){

     
         return (
            <View style={styles.container}>
                <Header message='Press to Login'></Header>
            <Text style={{flex:8}}>This will be home page </Text>
            <Text style={{flex:6}}> These other lines</Text>

            </View>
         );
         }

} 

const styles=StyleSheet.create({
    container:{
        flex:1,
      
        
    }
  })