import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';


export default class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
  
  
  render() {
    return (
      <View style={styles.container}>   
      <Text>Music</Text>     
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});