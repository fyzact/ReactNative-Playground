import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native'


export class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={isLoggedIn:false}

    }

    toogleUser=()=>{
        this.setState(previusState=>{
            return {isLoggedIn: !previusState.isLoggedIn};
        });

    }

    render (){
        let display=this.state.isLoggedIn ? "User Name":this.props.message;
       return (
           <View  style={styles.headStyle}>
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
        fontSize:20
    },
headStyle:{
    paddingTop:30,
 
    paddingRight:10,
    backgroundColor:Platform.OS==='android' ? '#31e981': '#35605a',
    flex:1

}
})

