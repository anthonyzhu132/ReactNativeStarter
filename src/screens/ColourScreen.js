import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

const ColourScreen = () => {

  const [colour, setColour] = useState([]);

  return (
    <View>
      <Button 
      title="Add Colour"
      onPress={() => {
        setColour([...colour, randomRgb()])
      }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }}/>
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColourScreen;