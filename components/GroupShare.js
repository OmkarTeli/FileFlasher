import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';


export default class GroupShare extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
  
  
  render() {
    return (
      <View style={styles.container}>    
          <View style={styles.mybuttons}>
                
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .7 }>
            
                      <View style={styles.insidebutton}>
                     

                      <Text style={{color:"#ffffff",fontSize:20}}>Create Group</Text>
                      </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .7 }>
                      <View style={styles.insidebutton}>
                          <Text style={{color:"#ffffff",fontSize:20}}>Join Group</Text>
                         
                      </View>
            </TouchableOpacity>
            
          </View>
    

         
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mybuttons :{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column",
    //marginTop:100
  },
  SubmitButtonStyle:{
    marginHorizontal:25,
    marginVertical:40,
    backgroundColor:'#BD1C6F',
    borderRadius:30,
    borderWidth: 5,
    borderColor: '#BD1C6F',
    alignItems:"center",
    width:250,
    height:80,
  },
  insidebutton:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"

  },
});
