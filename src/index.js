import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Home from "./screens/Home";

const Root = createStackNavigator({
  Home: Home
});

export default class App extends React.Component {
  render() {
    return <Root />;
  }
}
