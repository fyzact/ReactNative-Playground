import React from 'react';
import {Text,View,FlatList,Image,TouchableWithoutFeedback, TouchableWithoutFeedbackBase} from 'react-native';

export class Video extends React.Component{

    static navigationOptions={
        header:null
    };

    constructor (props){
        super(props);
        this.state={listLoaded:false}
    }

     key=()=>{

        return "api_key";
    }
    componentDidMount(){
        return fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=react native&type=video&key="+this.key()+"")
        .then((response)=>response.json())
        .then((responseJson)=>{
           
            this.setState({
                listLoaded:true,
                videoList:Array.from(responseJson.items)

            });

        }).catch((error)=>{
            console.error(error);
        });

    }

    render (){
        const {navigate}=this.props.navigation
        return (
            <View>
                { this.state.listLoaded && (
                    <View  style={{ paddingTop: 30}}>
                        <FlatList 
                        keyExtractor={item => item.id.videoId}
                            data={ this.state.videoList }
                            renderItem={({item}) => 
                                <TubeItem
                                navigate={navigate}
                                    id={item.id.videoId} 
                                    title={item.snippet.title} 
                                    imageSrc={item.snippet.thumbnails.high.url}
                                />
                            }
                        />
                    </View>
                )}
                
                { !this.state.listLoaded && (
                    <View style={{ paddingTop: 30}}>
                        <Text> LOADINGd </Text>
                    </View>
                )}      

            </View>  
        )
    }


}

export class TubeItem extends React.Component{
    constructor(props){
        super(props)
    }
    onPress=()=>{
       
        this.props.navigate('VideoDetailRT',{ytubeId:this.props.id});
        console.log(this.props.id);
    }

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View >
                    <Image style={{width:'100%', height:200}}
                    source={{uri:this.props.imageSrc}}>

                    </Image>
                    <Text>
                        {this.props.title}
                    </Text>
                
                </View>

            </TouchableWithoutFeedback>
        )
    }
}