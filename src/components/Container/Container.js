import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Container = ({ children }) => {
  return <View style={styles.Container}>{children}</View>;
};

export default Container;
