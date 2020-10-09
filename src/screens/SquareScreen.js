import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";

const SquareScreen = () => {

  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const COLOUR_INCREMENT = 10

  const setColour = (colour, change) => {
    // color = 'red', 'green', 'blue
    // change === +15, -15

    switch(colour) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
    case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
    }
  }

  return (
    <View>
      <ColourCounter
      colour="Red"
      onIncrease={() => setColour('red', COLOUR_INCREMENT)}
      onDecrease={() => setColour('red', -1 * COLOUR_INCREMENT)}
      />

      <ColourCounter
      colour="Green"
      onIncrease={() => setColour('green', +COLOUR_INCREMENT)}
      onDecrease={() => setColour('green', -1 * COLOUR_INCREMENT)}
      />

      <ColourCounter
      colour="Blue"
      onIncrease={() => setColour('blue', +COLOUR_INCREMENT)}
      onDecrease={() => setColour('blue', -1 * COLOUR_INCREMENT)}
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;