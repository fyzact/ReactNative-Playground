import  React from "react";
import { View, Text, StyleSheet, LogBox } from "react-native";
import { Home } from "./app/Views/Home";
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { Contact } from "./app/Views/Contact";
import { Video } from "./app/Views/Video";
import { VideoDetail } from "./app/Views/VideoDetail";
import { registerRootComponent } from "expo";
import { Register } from "./app/Views/Register";
import { Login } from "./app/Views/Login";
import { Quiz } from "./app/Views/Quiz";
import { QuizFinish } from "./app/Views/QuizFinish";
const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomeRT"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="HomeRT"
        component={Home} 
      />
      <Stack.Screen
        name="ContactRT"
        component={Contact}
      
      />
       <Stack.Screen
        name="VideoRT"
        component={Video}
      
      />
        <Stack.Screen
        name="VideoDetailRT"
        component={VideoDetail}
      
      />
         <Stack.Screen
        name="RegisterRT"
        component={Register}
      
      />
        <Stack.Screen
        name="LoginRT"
        component={Login}
      
      />
         <Stack.Screen
        name="QuizRT"
        component={Quiz}
      
      />
         <Stack.Screen
        name="FinishRT"
        component={QuizFinish}
      
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default function App() {
  return (
    <RootStack></RootStack>
  );
}


