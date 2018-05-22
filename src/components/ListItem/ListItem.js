import { Text, View, Image, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";

const RenderItem = item => (
  <Image
    resizeMode="contain"
    style={{ width: 70, height: 70, margin: 2 }}
    source={{
      uri: item.icon
    }}
  />
);

const calculateElixirAvg = cards => {
  let sum = cards.reduce((prev, curr) => {
    return prev + curr.elixir;
  }, 0);
  console.log(sum, cards.length);
  return sum / cards.length;
};

const ListItem = ({ decks }) => (
  <View style={styles.Container}>
    <Text style={styles.TitleText}>Popularity {decks.popularity}</Text>
    <View style={styles.ImageContainer}>
      <FlatList
        numColumns={4}
        data={decks.cards}
        renderItem={data => RenderItem(data.item)}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </View>
    <Text style={styles.Info}>
      Avg Elixir : {calculateElixirAvg(decks.cards).toFixed(2)}
    </Text>
  </View>
);

export default ListItem;
