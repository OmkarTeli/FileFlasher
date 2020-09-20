import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import GetStarted from "./components/GetStarted";
import LoginHere from "./components/LoginHere";
import Login from "./components/Login";
import Home from "./components/Home";
import GroupShare from "./components/GroupShare";
import InviteHere from "./components/InviteHere";
import TabScreen from "./components/TabScreen";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();
export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="GetStart" component={GetStarted} 
      options={{ title: 'Welcome', 
                 headerStyle: {
                 backgroundColor: '#BD1C6F'},
                 headerTintColor: '#fff',
                 headerTitleStyle: {
                 fontWeight: 'bold',
                 }}}/>

      <Stack.Screen name="Login Here" component={LoginHere}
       options={{ title: 'Register', 
       headerStyle: {
       backgroundColor: '#BD1C6F'},
       headerTintColor: '#fff',
       headerTitleStyle: {
       fontWeight: 'bold',
       }}}/>

      <Stack.Screen name="Login" component={Login}
       options={{ title: 'Login', 
       headerStyle: {
       backgroundColor: '#BD1C6F'},
       headerTintColor: '#fff',
       headerTitleStyle: {
       fontWeight: 'bold',
       }}}/>

      <Stack.Screen name="Home" component={Home}
      options={{ 
      title: 'FileFlasher',
      headerRight: () => (
        <TouchableOpacity
      
          style={styles.SubmitButtonStyle}
          title="+"
        >
        <Text style={{color:"#ffffff",
                      fontSize:40   
                      }}>+</Text>
        </TouchableOpacity>  
       ),
       headerStyle: {
       backgroundColor: '#ffffff'},
       headerTintColor: '#BD1C6F',
       headerTitleStyle: {
       fontWeight: 'bold',
       }}}
       />
       <Stack.Screen name="InviteHere" component={InviteHere}
       options={{ title: 'Invite', 
       headerStyle: {
       backgroundColor: '#ffffff'},
       headerTintColor: '#BD1C6F',
       headerTitleStyle: {
       fontWeight: 'bold',
    
       }}}/>

       <Stack.Screen name="GroupShare" component={GroupShare}
       options={{ title: 'Group Share', 
       headerStyle: {
       backgroundColor: '#ffffff'},
       headerTintColor: '#BD1C6F',
       headerTitleStyle: {
       fontWeight: 'bold',
    
       }}}/>

      <Stack.Screen name="TabScreen" component={TabScreen}
       options={{ title: 'Select Files', 
       headerStyle: {
       backgroundColor: '#BD1C6F'},
       headerTintColor: '#fff',
       headerTitleStyle: {
       fontWeight: 'bold',
       }}}/>

       
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}
const styles = StyleSheet.create({
  SubmitButtonStyle:{
    borderRadius:25,
    borderWidth: 5,
    borderColor: '#BD1C6F',
   // alignItems:"center",
   backgroundColor:'#BD1C6F',
    width:45,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginRight:10
  }
});
