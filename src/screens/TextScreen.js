import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  return (
    <View>
      <TextInput style={styles.inputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;