import React, { Component } from 'react';
import {  Text, TouchableHighlight, View,ActivityIndicator } from 'react-native';

export  class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {
         animating: true,
       };

       setTimeout(() => {
         this.setState({animating: !this.state.animating});

       }, 5000);

  }
_hight(){
  alert(1);
}
  render() {
    return (
    <View>
  <ActivityIndicator
    style={{marginTop:50}}
    size="large"
    color="red"
    animating={this.state.animating}
    />
  <TouchableHighlight
    onPress={this._hight}
    underlayColor="red"
    >
    <Text>TouchableHighlight</Text>
  </TouchableHighlight>

    </View>



    );
  }
}
export {  Load as  default  }
