import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { thunk } from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk)
);
