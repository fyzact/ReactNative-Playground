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
        let userScore=this.props.navigation.getParam('score','Error-No Score Returned');
         
        let questionsMissed=this.props.navigation.getParam('missed','Error-No Missed Questions'); 
        let totalQuestions=this.props.navigation.getParam('questions','No Questions Returned');

        return (
            <View style={styles.container}>
                <Text>your quiz score was {}</Text>
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