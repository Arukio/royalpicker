import {
  FETCH_DECKS,
  FETCH_DECKS_FAIL,
  FETCH_DECKS_SUCCESS
} from "../actions/FetchDeck";

const initialState = {
  isLoading: false,
  data: []
};

export default function DecksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        data: [],
        isLoading: true
      };
    case FETCH_DECKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
}
