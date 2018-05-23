"use strict";
import React, { Component } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getLastestDecks } from "../../actions/FetchDeck";
import { getDetail, removeDetail } from "../../actions/DeckDetails";
import { Container } from "../components/Container";
import { ListItem } from "../components/ListItem";

class Home extends Component {
  static navigationOptions = {
    title: "Deck Picker",
    headerStyle: {
      backgroundColor: "#226666"
    }
  };

  componentDidMount() {
    this.props.dispatch(removeDetail());
    this.props.dispatch(getLastestDecks());
  }

  openDeckDetail = item => {
    this.props.dispatch(getDetail(item));
    this.props.navigation.navigate("Detail");
  };

  render() {
    const { data, isLoading } = this.props;
    if (isLoading) {
      return <Text>Loading..</Text>;
    } else {
      return (
        <Container>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ListItem decks={item} onPress={this.openDeckDetail} />
            )}
            keyExtractor={item => item.decklink}
          />
          />
        </Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  data: state.decksReducer.data,
  isLoading: state.decksReducer.isLoading
});

export default connect(mapStateToProps)(Home);
