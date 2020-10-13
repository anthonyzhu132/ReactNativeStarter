import React from "react";
import { Text, StyleSheet, View, Button  } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Button 
        title="ComponentScreen Demo"
        onPress={()=> navigation.navigate('Components')}
      />

      <Button 
        title="ListScreen Demo"
        onPress={()=> navigation.navigate('List')}
      />

      <Button 
        title="ImageScreen Demo"
        onPress={()=> navigation.navigate('Image')}
      />

      <Button 
        title="CounterScreen Demo"
        onPress={()=> navigation.navigate('Counter')}
      />

      <Button 
        title="ColourScreen Demo"
        onPress={()=> navigation.navigate('Colour')}
      />

      <Button 
        title="SquareScreen Demo"
        onPress={()=> navigation.navigate('SquareScreen')}
      />
      <Button 
        title="TextScreen Demo"
        onPress={()=> navigation.navigate('Text')}
      /> 

      <Button 
        title="BoxScreen Demo"
        onPress={()=> navigation.navigate('Box')}
      /> 

    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;