// we can create the store
//my sction is also one function and reducer also one function how will get the cappibulty

import { createStore, combineReducers, applyMiddleware } from "redux";
import nameReducer from "../reducers/nameReducer";
import { logger } from "redux-logger";

const store = createStore(
  combineReducers({ nameReducer }),
  applyMiddleware(logger)
);

export default store;
