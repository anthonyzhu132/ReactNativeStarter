import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentScreen from "./ComponentsScreen";

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
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;