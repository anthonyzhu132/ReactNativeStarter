import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";

const COLOUR_INCREMENT = 10

//State  - object
//Action - what to do to the state object
const reducer = (state, action) => {
  //State === {red: number, green: number, blue: number}
  //Action === {type: change_red || change_blue || change_green, payload: 15 || -15}

  switch(action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload};
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload};
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
      onIncrease={() => dispatch({ type: 'change_red', payload: COLOUR_INCREMENT})}
      onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOUR_INCREMENT})}
      />

      <ColourCounter
      colour="Green"
      onIncrease={() => dispatch({ type: 'change_green', payload: COLOUR_INCREMENT})}
      onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOUR_INCREMENT})}
      />

      <ColourCounter
      colour="Blue"
      onIncrease={() => dispatch({ type: 'change_blue', payload: COLOUR_INCREMENT})}
      onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOUR_INCREMENT})}
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;