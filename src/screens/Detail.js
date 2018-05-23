import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Container } from "../components/Container";
import { DeckDetail } from "../components/DeckDetail";

class Detail extends React.Component {
  static navigationOptions = {
    title: "Deck Detail",
    headerStyle: {
      backgroundColor: "#226666",
      borderBottomWidth: 0
    }
  };

  render() {
    return (
      <Container>
        <DeckDetail data={this.props.deck} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  deck: state.deckDetailsReducer.deck
});

export default connect(mapStateToProps)(Detail);
