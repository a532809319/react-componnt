

import React, { Component } from 'react';
import {  Text, TextInput, TouchableHighlight,View } from 'react-native';

export class MyInput extends Component {
  _onPressButton() {
    console.log("You tapped the button!");
    //alert(1)
  }

  render() {
    return (
        <View>
        <TextInput
          style={{height:50}}
           keyboardType="numeric"
          placeholder="ninnnn  aaa"
          />
        <Text>aaa</Text>


        </View>
    );
  }
}
export  {MyInput as  default}
