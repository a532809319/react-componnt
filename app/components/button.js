

import React, { Component } from 'react';
import {  Text,  TouchableHighlight,View } from 'react-native';

export class MyButton extends Component {
  _onPressButton() {
    console.log("You tapped the button!");
    //alert(1)
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <Text style={{height:100,width:100,marginTop:50}}>Button</Text>
      </TouchableHighlight>
    );
  }
}
export  {MyButton as  default}
