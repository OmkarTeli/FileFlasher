import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Button, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class GetStarted extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <View style={styles.container}>
       
      <View  style={styles.logo}>
      <Image source={require('../assets/mylogo.png')}/>
      
      </View>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() => {this.props.navigation.navigate("Login Here");}}
        >

            <Text style={styles.TextStyle}>Get Started</Text>
            
      </TouchableOpacity>
     
      </View>
    );

  }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     flexDirection: "column",
     alignItems:"center",
     justifyContent:"center"
    },
    image: {
      resizeMode: "contain",
      justifyContent: "center",
   
    },
    logo: {
      alignItems:"center",
      marginTop:150,

    },
   
    SubmitButtonStyle: {
      marginTop:100,
      marginBottom:200,
      backgroundColor:'#BD1C6F',
      borderRadius:25,
      borderWidth: 5,
      borderColor: '#BD1C6F',
      alignItems:"center",
      width:300,
      height:50
    },
    TextStyle:{
      justifyContent:"center",
      color:'#fff',
      marginTop:5,
      fontSize:20,
      textAlign:'center',
      alignItems:"center"

  }
  });
  
  

     
      

     
     
 