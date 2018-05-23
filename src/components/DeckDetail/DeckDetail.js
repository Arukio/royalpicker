import React from "react";
import { View, Text, Image, FlatList, Button, Linking } from "react-native";
import { styles } from "./styles";
import { ListItem } from "../ListItem";

const RenderCardItem = card => (
  <View style={styles.CardItem}>
    <Image
      resizeMode="contain"
      style={styles.CardImage}
      source={{
        uri: card.icon
      }}
    />
    <View style={styles.CardDetail}>
      <Text style={styles.ItemTitle}>{card.name}</Text>
      <View style={styles.itemDesc}>
        <Text style={styles.TextItem}>Arena : {card.arena}</Text>
        <Text style={styles.TextItem}>Elixir : {card.elixir}</Text>
        <Text style={styles.TextItem}>Max lv : {card.maxLevel}</Text>
        <Text style={styles.TextItem}>Rarity : {card.rarity}</Text>
      </View>
    </View>
  </View>
);

const DeckDetail = ({ data }) => (
  <View style={styles.Container}>
    <View style={styles.Header}>
      <Text style={styles.HeaderText}>
        Decks Popularity : {data.popularity}
      </Text>
    </View>
    <View style={styles.Body}>
      <FlatList
        data={data.cards}
        renderItem={({ item }) => RenderCardItem(item)}
      />
    </View>
    <View style={styles.Footer}>
      <Button
        style={{ borderRadius: 10 }}
        title={"Save to Deck"}
        onPress={() => Linking.openURL(data.decklink)}
      />
    </View>
  </View>
);

export default DeckDetail;
