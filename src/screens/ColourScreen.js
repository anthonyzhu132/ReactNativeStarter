import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColourScreen = () => {

  const [colour, setColour] = useState([]);

  //On press button changes colour array, ... (Spreads) onto new array
  //Lists colours out using data from colours, renders each ITEM.
  
  return (
    <View>
      <Button 
      title="Add Colour"
      onPress={() => {
        setColour([...colour, randomRgb()])
      }}
      />

      <FlatList
      keyExtractor={(item) => item}
      data={colour}
      renderItem={({ item }) => {
        return <View style={{ height: 100, width: 100, backgroundColor: item }}/>
      }}
      />
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