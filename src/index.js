import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import configureStore from "../config/configureStore";
import Home from "./screens/Home";

const store = configureStore();

const Root = createStackNavigator({
  Home: Home
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
