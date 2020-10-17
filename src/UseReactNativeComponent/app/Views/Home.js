
import React from "react"
import { View,StyleSheet,Text } from "react-native";
 import { Header } from "../sections/Header.js";
import { Hero } from "../sections/Hero.js";
import { Menu } from "../sections/Menu.js";
import {NavigationStackAction} from 'react-navigation'



 export class Home extends React.Component{
     render(){

     const {navigate}=this.props.navigation;
         return (
            <View style={styles.container}>
                <Header navigate={navigate} message='Press to Login'></Header>
            
            <Hero></Hero>
             <Menu navigate={navigate}></Menu> 

            </View>
         );
         }

} 

const styles=StyleSheet.create({
    container:{
        flex:1,
      
        
    }
  })