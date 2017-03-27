

import React, { Component } from 'react';
import { Animated,Image,StyleSheet,AppRegistry, Text,TouchableHighlight, View,ActivityIndicator } from 'react-native';
// import {ActionSheetExample}  from './app/components/ActionSheetIOS'；

export default class some extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <Text  style={styles.container}>
      {/* <Abc  a="aaaaa到青岛非法所得发疯的" /> */}
      aaa
  </Text>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    marginTop:20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('some', () => some);
