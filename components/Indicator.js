import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Indicator extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          this.props.isActive && styles.gain,
          !this.props.isActive && styles.loss
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    width: 22,
    height: 22,
  },
  gain: {
    backgroundColor: "green"
  },
  loss: {
    backgroundColor: "red"
  }
});
