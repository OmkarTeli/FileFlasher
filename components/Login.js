import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
  
  
  render() {
    return (
      <View style={styles.container}>         
         
          <Text style={{fontSize:30, color:"#BD1C6F"}}>Login</Text>       
         
          <TextInput
            style = {styles.TextInput}
            
            placeholderTextColor = "#636e66"
            placeholder = "Email Id"
            />
            <TextInput 
            style = {styles.TextInput}
            placeholder = {"Enter Your Password"}
            placeholderTextColor = "#636e66"
            secureTextEntry
            maxLength = {12}
           /> 
            
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() => {this.props.navigation.navigate("Home");}}

        >

        <Text style={{color:"#ffffff",fontSize:20}}>Sign In</Text>
            
        </TouchableOpacity>

          </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextInput:{
    width: 300,
    height:46,
    marginTop:5,
    marginBottom:5,
    borderRadius: 100,
    borderWidth: 2,
    borderColor:"#BD1C6F",
    alignItems: 'center',
    padding:10,
    textAlign: 'center'
  },

  Image:{
      marginTop:50,
    width:120,
    height:150,    
  },

  SubmitButtonStyle: {
    paddingVertical:5,
    marginTop:10,
    marginBottom:20,
    backgroundColor:'#BD1C6F',
    borderRadius:25,
    borderWidth: 5,
    borderColor: '#BD1C6F',
    alignItems:"center",
    width:150,
    height:50,   
  },

  
});

<Image style={styles.Image}
                 source= {require('../assets/Logo.png')}/>