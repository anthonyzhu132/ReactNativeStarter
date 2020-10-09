import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {

  //Always have state for any text input, never directly inspect Child component from Parent
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password</Text>

      <TextInput 
      style={styles.inputStyle}
      autoCapitalize="none" 
      autoCorrect={false}
      value={password}
      onChangeText={(newText) => setPassword(newText)}
      secureTextEntry={true}
      />

      {password.length > 5 ? <Text>Good Password brother</Text> : <Text>Password must be longer than 5 Characters</Text>}

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