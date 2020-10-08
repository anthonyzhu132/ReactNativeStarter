import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return <Text style={styles.textStyle}>ComponentScreen Dank</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50
  }
});

export default ComponentScreen;