import React from 'react';
import {Text,View,FlatList,Image,TouchableWithoutFeedback, TouchableWithoutFeedbackBase} from 'react-native';
import {QuizData} from '../data/QuizQuestion';
import {Questions} from '../sections/Questions';


export class Quiz extends React.Component{

    constructor(props){
        super(props);
        this.state={
            questLoaded:false,
            totalScore:100,
            completeQuiz:false
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
            <View>

            </View>
        )
    }
}