import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://i.imgur.com/vSFd9uD.png'
    };
    return (
      <View style={{ flex: 1} }>
        <View style={{flex: 1, backgroundColor: 'powderblue',zIndex:49}}/ >
        <View style={{flex: 2,justifyContent: "center", alignItems: "center", backgroundColor: 'skyblue',zIndex:49}} ><Image source={pic} style={{width: 193, height: 193}}/><Text style={{color:"white",fontSize:25}}>數位二甲 林耕祺</Text></View>
        <View style={{flex: 1,justifyContent: "center", alignItems: "center", backgroundColor: 'steelblue',zIndex:49}} ></View>
        
      </View>
    );
  }
}
