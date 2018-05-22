"use strict";
import React, { Component } from "react";
import { Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { getLastestDecks } from "../../actions/FetchDeck";
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
    this.props.dispatch(getLastestDecks());
  }

  render() {
    const { data, isLoading } = this.props;
    return (
      <Container>
        <FlatList
          data={data}
          renderItem={({ item }) => <ListItem decks={item} />}
          keyExtractor={item => item.decklink}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.decksReducer.data,
  isLoading: state.decksReducer.isLoading
});

export default connect(mapStateToProps)(Home);
