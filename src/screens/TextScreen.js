import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {

  //Always have state for any text input, never directly inspect Child component from Parent
  const [name, setName] = useState('');
  console.log(name);

  return (
    <View>
      <Text>Enter Name</Text>

      <TextInput 
      style={styles.inputStyle}
      autoCapitalize="none" 
      autoCorrect={false}
      value={name}
      onChangeText={(newText) => setName(newText)}
      />

      <Text>My name is {name}</Text>
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