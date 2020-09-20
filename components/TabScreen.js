import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import Images from "../components2/Images";
import Apps from "../components2/Apps";
import Music from "../components2/Music";
import Videos from "../components2/Videos";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
export default class TabScreen extends React.Component {
  render(){
    return (
       
          <Tab.Navigator
          
          barStyle={{ backgroundColor: '#BD1C6F' }}
          tabBarOptions={{
            activeTintColor: '#BD1C6F',
              }}>
            <Tab.Screen 
            name="Apps" 
            component={Apps} 
            />

            <Tab.Screen 
            name="Images"
            component={Images} 
            />

            <Tab.Screen 
            name="Music" 
            component={Music}
            />

            <Tab.Screen 
            name="Videos" 
            component={Videos}
            />
          </Tab.Navigator>
      );
}
}


