import { combineReducers } from "redux";
import decksReducer from "./decksReducer";
import deckDetailsReducer from "./deckDetailsReducer";

const rootReducer = combineReducers({
  decksReducer,
  deckDetailsReducer
});

export default rootReducer;
