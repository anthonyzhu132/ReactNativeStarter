import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {

  const [name, setName] = useState('');
  console.log(name);

  return (
    <View>
      <TextInput 
      style={styles.inputStyle}
      autoCapitalize="none" 
      autoCorrect={false}
      value={name}
      onChangeText={(newText) => setName(newText)}
      />
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