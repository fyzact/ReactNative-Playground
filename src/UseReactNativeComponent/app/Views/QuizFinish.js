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

export class QuizFinish extends React.Component{

    static navigationOptions={
        header:null
    };
    exitQuiz=()=>this.props.navigation.navigate("HomeRT");

    render(){
        let userScore=this.props.route.params.score;
         
        let questionsMissed=this.props.route.params.missed;
        let totalQuestions=this.props.route.params.questions;

        return (
            <View style={styles.container}>
                <Text>your quiz score was {userScore}</Text>
                <Text>your missed on   {questionsMissed} out of {totalQuestions} questions</Text>
                <TouchableHighlight onPress={this.exitQuiz} style={styles.buttons}>
                    <Text>Finih Quiz</Text>

                </TouchableHighlight>
            </View>
        )
    }


}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        alignItems:'center',
        justifyContent:'center'

    },
    buttons:{
        alignItems:'center',
        justifyContent:'center',
        height:'10%'

    }

});