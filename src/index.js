import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import configureStore from "../config/configureStore";
import Home from "./screens/Home";
import Detail from "./screens/Detail";

const store = configureStore();

const Root = createStackNavigator({
  Home: Home,
  Detail: Detail
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
