import React, { Component } from 'react';
import {  TabBarIOS,Text, TouchableHighlight, View,ActivityIndicator } from 'react-native';

export  class Ta extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <TabBarIOS
        unselectedTintColor="yellow"
               tintColor="white"
               unselectedItemTintColor="red"
               barTintColor="darkslateblue">

        >
          <TabBarIOS.Item
title="Blue Tab"
            >
            <Text>a</Text>

          </TabBarIOS.Item>
          <TabBarIOS.Item
title="g Tab"
            >
            <Text>b</Text>


          </TabBarIOS.Item>
      </TabBarIOS>




    );
  }
}
export {  Ta as  default  }
