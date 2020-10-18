import React from 'react';
import {Text,View,FlatList, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {QuizData} from '../data/QuizQuestion';
import {Questions} from '../sections/Questions';


export class Quiz extends React.Component{

    constructor(props){
        super(props);
        this.state={
            questLoaded:false,
            totalScore:100,
            completedQuiz:false
        }
    }

    scoreUpdate=(penalty)=>{
        let tempScore=this.state.totalScore;
        let missed=this.state.incorret;
        let questionsTotal=this.state.numberOfQuestions;
        let questionsDone=this.state.questionAnswered;

        let newScore=tempScore-penalty;
        let totalAnswered=questionsDone+1;
        let totalMissed=penalty?missed+1:missed


        this.setState({
            totalScore:newScore,
            incorrect:totalMissed,
            questionAnswered:totalAnswered
        });

        if(totalAnswered===questionsTotal){
            this.setState({
                completedQuiz:true
            })
        }

    }

    componentDidMount(){
        alert(Array.from(QuizData.questions).length);
        this.setState({
            questList:Array.from(QuizData.questions),
            questLoaded:true,
            numberOfQuestions:Array.from(QuizData.questions).length,
            incorrect:0,
            questionAnswered:0
        })
    }

    finishQuiz=()=>{
        this.props.navigation.navigate(
            'FinishRT',
            {
            'score':this.state.totalScore,
            'missed':this.state.incorrect,
            'questions':this.state.numberOfQuestions
            }

        )
    }


    render(){
        return (
            <View style={StyleSheet.container}> 
            {

           this.state.questLoaded &&
           (
           <FlatList 
           data={this.state.questList}
           renderItem={(item)=>{
               return (
                   <Questions
                   question={item.item.question}
                   answer1={item.item.answer1}
                   answer2={item.item.answer2}
                   answer3={item.item.answer3}
                   answer4={item.item.answer4}
                   correctAnswer={item.item.correctAnswer}
                   scoreUpdate={this.scoreUpdate}

                   />
               )
           }}
           
           />

            )}
            {
                !this.state.completedQuiz && (
                    <TouchableHighlight style={styles.disabled}>
                        <Text>Answer all the questions</Text>

                    </TouchableHighlight>
                )
            }

{
                this.state.completedQuiz && (
                    <TouchableHighlight onPress={this.finishQuiz} style={styles.enabled}>
                        <Text>Finished</Text>

                    </TouchableHighlight>
                )
            }
            {!this.state.questLoaded && (
                <Text>LOADING</Text>
            )}

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{

        flex:1,
        paddingTop:30,
    },
    disabled:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d3d3d3',
        height:'10%'
    },
    enabled:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#90ee90',
        height:'10%'
    }


})