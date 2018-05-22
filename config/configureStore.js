import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import app from "../reducers";

export default function configureStore() {
  let store = createStore(app, applyMiddleware(thunk), applyMiddleware(logger));
  return store;
}
