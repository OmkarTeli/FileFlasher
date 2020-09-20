import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';


export default class Home extends Component {
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
                      source={require('../assets/mylogo.png')}/>
          </View>     
          <View style={styles.sendreceive}>
                
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate("TabScreen");}}
              style={styles.SubmitButtonStyle}
              activeOpacity = { .7 }>
            
                      <View style={styles.insidebutton}>
                      <Image
                      source={require('../assets/send.png')}/>

                      <Text style={{color:"#ffffff",fontSize:20}}>Send</Text>
                      </View>
            </TouchableOpacity>

            <TouchableOpacity
               onPress={() => {this.props.navigation.navigate("InviteHere");}}
              style={styles.SubmitButtonStyle}
              activeOpacity = { .7 }>
                      <View style={styles.insidebutton}>
                          <Text style={{color:"#ffffff",fontSize:20}}>Receive</Text>
                          <Image
                          source={require('../assets/receive.png')}/>
                      </View>
            </TouchableOpacity>
            
          </View>
          <View>
              <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity = { .7 }
                onPress={() => {this.props.navigation.navigate("GroupShare");}}>
                      <View style={{flexDirection:"column",
                                    flex:1,
                                    justifyContent:"center",
                                    alignItems:"center"}}>
                          <Image
                          source={require('../assets/send.png')}/>                  
                          <Text style={{color:"#ffffff",fontSize:15}}>Group</Text>
                          <Text style={{color:"#ffffff",fontSize:15}}>Share</Text>
                          <Image
                          style={styles.button}
                          source={require('../assets/receive.png')}/>
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
   // justifyContent: 'center'
  },
  sendreceive: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    marginTop:100
  },
  SubmitButtonStyle:{
    marginHorizontal:25,
    marginVertical:15,
    backgroundColor:'#BD1C6F',
    borderRadius:100,
    borderWidth: 5,
    borderColor: '#BD1C6F',
    alignItems:"center",
    width:100,
    height:100,
  },
  insidebutton:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"

  },
  logoimage:{
    width:150,
    height:105,
    marginTop:10
  }
  
});
