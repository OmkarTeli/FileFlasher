import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';


export default class LoginHere extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
  
  
  render() {
    return (
      <View style={styles.container}>         
         
          <Text style={{fontSize:30, color:"#BD1C6F"}}>Sign Up</Text>       
          <View style={{flexDirection:"row"}}>
          <Text style={{marginRight:10}}>Already an user ?</Text> 
          <TouchableOpacity
              onPress={() => {this.props.navigation.navigate("Login");}}
             activeOpacity = { .5 }>

          <Text style={{color:"#030ffc"}}>Sign in</Text>
            
          </TouchableOpacity>  
          </View>  
          <TextInput
            style = {styles.TextInput}
            inlineImageLeft='user'
            placeholderTextColor = "#636e66"
            placeholder = "Enter User Name"
            />
            <TextInput 
            style = {styles.TextInput}
            placeholder = {"Create Password"}
            placeholderTextColor = "#636e66"
            secureTextEntry
            maxLength = {12}
            /> 
             <TextInput 
            style = {styles.TextInput}
            placeholder = {"Confirm Password"}
            placeholderTextColor = "#636e66"
            secureTextEntry
            maxLength = {12}
            /> 
            <Text style={{color:"#e880e1", paddingHorizontal:50}}>By creating an account you agree to our Terms of Service and Privacy Policy......</Text>

        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }

        >

        <Text style={{color:"#ffffff",fontSize:20}}>Sign Up</Text>
            
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }

        >

        <Text style={{color:"#ffffff",fontSize:20}}>Login With Google</Text>
            
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
    
    textAlign: 'left'
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
    width:300,
    height:50,   
  },

  
});

<Image style={styles.Image}
                 source= {require('../assets/Logo.png')}/>