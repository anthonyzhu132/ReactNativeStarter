const react = require("react")
import React from 'react';
import { text, Stylesheet } from 'react-native';

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>ComponentsScreen.js</Text>;
};

const styles = Stylesheet.create({
  textStyle: {
    fontsize: 30
  }
})

export default ComponentsScreen;