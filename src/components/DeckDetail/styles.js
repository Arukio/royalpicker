import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5
  },
  Header: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
  HeaderText: {
    fontWeight: "700",
    padding: 10
  },
  Body: {
    flex: 1
  },
  Footer: {
    height: 50,
    backgroundColor: "white",
    borderTopColor: "grey",
    borderTopWidth: 1
  },
  CardItem: {
    height: 150,
    margin: 10,
    borderRadius: 10,
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "grey"
  },
  CardImage: {
    height: 100,
    width: 100,
    marginVertical: 20
  },
  CardDetail: {
    marginVertical: 5,
    marginLeft: 20
  },
  ItemTitle: {
    fontWeight: "600",
    fontSize: 20
  },
  itemDesc: {
    marginTop: 10
  },
  TextItem: {}
});
