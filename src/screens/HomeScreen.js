import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>dank</Text>
      <Button 
        title="ComponentScreen Demo"
        onPress={()=> props.navigation.navigate('Components')}
      />
      <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
        <Text>ListScreen Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;