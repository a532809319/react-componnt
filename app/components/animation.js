

import React, { Component } from 'react';
import {  Text,
  Animated,
  Image,



  Easing ,TouchableHighlight,View } from 'react-native';

export class Playground extends React.Component {
constructor(props) {
 super(props);
 this.state = {
   bounceValue: new Animated.Value(0),
 };
}
render() {
 return (
   <Animated.Image                         // Base: Image, Text, View
     source={{uri: 'http://wx4.sinaimg.cn/mw690/bfdcef89gy1fdd9j7jnsjj208c046q3c.jpg'}}
     style={{
       flex: 1,
       transform: [                        // `transform` is an ordered array
         {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
       ]
     }}
   />
 );
}
componentDidMount() {
 this.state.bounceValue.setValue(2.5);     // Start large
 Animated.spring(                          // Base: spring, decay, timing
   this.state.bounceValue,                 // Animate `bounceValue`
   {
     toValue: 0.8,                         // Animate to smaller size
     friction: 1,                          // Bouncier spring
   }
 ).start();                                // Start the animation
}
}
export  {Playground as  default}
