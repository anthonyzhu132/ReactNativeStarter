import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {

  //State == { count: number}
  //Action == { type: 'increase/decrease'}

  switch(action.type) {
    case 'change_count':
      return {...state, count: state.count + action.payload}
    default:
      return state;
  }
}

const CounterScreen = () => {
  
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const { count } = state
  
  return (
    <View>
      <Button
      title="Increase"
      onPress={() => {
        dispatch({ type: 'change_count', payload: 1})
      }}
      />
      <Button
      title="Decrease"
      onPress={() => {
        dispatch({ type: 'change_count', payload: -1})
      }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;


// //const reducer = (state, action) => {
//   //State === {red: number, green: number, blue: number}
//   //Action === {type: change_red || change_blue || change_green, payload: 15 || -15}

//   switch(action.type) {
//     case 'change_red':
//       return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload};
//     case 'change_green':
//       return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload};
//     case 'change_blue':
//       return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload};
//     default:
//       return state;
//   }
// };