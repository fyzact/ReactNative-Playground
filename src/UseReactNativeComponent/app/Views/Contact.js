
import React from 'react';
import { Header } from "../sections/Header";
import {StyleSheet,Text,View} from 'react-native'

export class Contact extends React.Component{
    static navigationOptions={
        header:null
    };

    render (){
        return (
            <View style={styles.container}>
                <Header message='Press to Login'></Header>
                <Text style={{flex:8}}>
                the contact
                </Text>
                <Text style={{flex:6}}>
                the contact
                </Text>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        flex:1
    }
})