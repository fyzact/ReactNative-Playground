import React from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native'


export class Hero extends React.Component{
   
    render (){
       return (
               <Image style={styles.heroImage} source={require('./img/product.jpg')}></Image>
      )
    }


}

const styles=StyleSheet.create({

heroImage:{
    flex:8,
    height:undefined,
    width:undefined
}
})
