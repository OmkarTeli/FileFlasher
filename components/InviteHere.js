import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';


export default class InviteHere extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
  
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
                      style={styles.logoimage}
                      source={require('../assets/qr.png')}/>
          </View>
          <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"#BD1C6F"}}>Scan QR Code</Text>
          <Text>-----------------------------------------</Text>
          </View>
          <View style={styles.mybuttons}>
                
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .7 }>
            
                      <View style={styles.insidebutton}>
                     

                      <Text style={{color:"#ffffff",fontSize:20}}>Bluetooth</Text>
                      </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .7 }>
                      <View style={styles.insidebutton}>
                          <Text style={{color:"#ffffff",fontSize:20}}>Hotspot</Text>
                         
                      </View>
            </TouchableOpacity>
            
          </View>
          <View style={{
            flex:1,alignItems:"center",
                        justifyContent:"center",
                        paddingHorizontal:30,
                        flexDirection:"column"}}>
            <Text style={{color:"#BD1C6F"}}>Share FileFlasher to Android
                    device via</Text><Text style={{color:"#BD1C6F"}}>bluetooth or hotspot.</Text>
          </View>
    

         
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center'
  },
  mybuttons :{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column",
    //marginTop:100
    paddingTop:5
  },
  SubmitButtonStyle:{
    marginHorizontal:25,
    marginVertical:10,
    backgroundColor:'#BD1C6F',
    borderRadius:30,
    borderWidth: 5,
    borderColor: '#BD1C6F',
    alignItems:"center",
    width:250,
    height:50,
  },
  insidebutton:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"

  },
  logoimage:{
    width:300,
    height:250,
  }
});
