'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  ActionSheetIOS,
  StyleSheet,
  Text,
  UIManager,
  View,
} = ReactNative;


var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export class ActionSheetExample extends React.Component {
  state = {
    clicked: 'none',
  };

  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet} style={styles.button}>
          Click to show the ActionSheet
        </Text>
        <Text>
          Clicked button: {this.state.clicked}
        </Text>
      </View>
    );
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  };
}
const styles= StyleSheet.create({
  button: {
    marginBottom: 10,
    marginTop: 100,
    fontWeight: '500',

  }
})
export  {ActionSheetExample  as default}
