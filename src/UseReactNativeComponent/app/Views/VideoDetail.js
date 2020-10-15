import React from  'react'
import {Text, View,StyleSheet} from 'react-native'
import WebView from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
export class VideoDetail extends React.Component{

   
    static navigationOptions={
        header:null
    }

    render (){
        let ytubeId=this.props.route.params.ytubeId;
        let ytubeUrl=`https://www.youtube.com/embed/${ytubeId}`
      
        return (
        <WebView style={{paddingTop:20}} allowsFullscreenVideo
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction
        javaScriptEnabled
       javaScriptEnabled={true} source={{uri:ytubeUrl}} />

  

       
        )
    }
}

const styles = StyleSheet.create({
    Container: {
      flex: 1
    },
    WebViewStyle: {
      margin: 20
    }
  });