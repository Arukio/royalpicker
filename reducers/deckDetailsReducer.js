import { GET_DETAIL, REMOVE_DETAIL } from "../actions/DeckDetails";

export default function deckDetailsReducer(
  state = {
    deck: {}
  },
  action
) {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        deck: action.payload.data
      };
    case REMOVE_DETAIL:
      return {
        ...state,
        deck: {}
      };
    default:
      return state;
  }
}
