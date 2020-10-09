import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";

const SquareScreen = () => {

  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);


  const SETTER = `rgb(${red}, ${green}, ${blue})`

  return (
    <View>
      <ColourCounter
      colour="Red"
      onIncrease={() => setRed(red +10)}
      onDecrease={() => setRed(red -10)}
      />

      <ColourCounter
      colour="Green"
      onIncrease={() => setGreen(green +10)}
      onDecrease={() => setGreen(green -10)}
      />

      <ColourCounter
      colour="Blue"
      onIncrease={() => setBlue(blue +10)}
      onDecrease={() => setBlue(blue -10)}
      />
      <View style={{ height: 100, width: 100, backgroundColor: SETTER }}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;