import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";

const SquareScreen = () => {

  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);


  const SETTER = `rgb(${red}, ${green}, ${blue})`
  const COLOR_INCREMENT = 10

  return (
    <View>
      <ColourCounter
      colour="Red"
      onIncrease={() => setRed(red + COLOR_INCREMENT)}
      onDecrease={() => setRed(red - COLOR_INCREMENT)}
      />

      <ColourCounter
      colour="Green"
      onIncrease={() => setGreen(green +COLOR_INCREMENT)}
      onDecrease={() => setGreen(green -COLOR_INCREMENT)}
      />

      <ColourCounter
      colour="Blue"
      onIncrease={() => setBlue(blue +COLOR_INCREMENT)}
      onDecrease={() => setBlue(blue -COLOR_INCREMENT)}
      />
      <View style={{ height: 100, width: 100, backgroundColor: SETTER }}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;