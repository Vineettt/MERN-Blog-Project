import { createStore } from "redux";
import { reducer } from "./reducers/index";

const initialState = {};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
