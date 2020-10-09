import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";

const COLOUR_INCREMENT = 10

//State  - object
//Action - what to do to the state object
const reducer = (state, action) => {
  //State === {red: number, green: number, blue: number}
  //Action === {colourToChange: red || blue || green, amount: 15 || -15}

  switch(action.colourToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : {...state, red: state.red + action.amount};
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : {...state, green: state.green + action.amount};
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state

  return (
    <View>
      <ColourCounter
      colour="Red"
      onIncrease={() => dispatch({ colourToChange: 'red', amount: COLOUR_INCREMENT})}
      onDecrease={() => dispatch({ colourToChange: 'red', amount: -1 * COLOUR_INCREMENT})}
      />

      <ColourCounter
      colour="Green"
      onIncrease={() => dispatch({ colourToChange: 'green', amount: COLOUR_INCREMENT})}
      onDecrease={() => dispatch({ colourToChange: 'green', amount: -1 * COLOUR_INCREMENT})}
      />

      <ColourCounter
      colour="Blue"
      onIncrease={() => dispatch({ colourToChange: 'blue', amount: COLOUR_INCREMENT})}
      onDecrease={() => dispatch({ colourToChange: 'blue', amount: -1 * COLOUR_INCREMENT})}
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;