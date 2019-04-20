import { combineReducers } from "redux";
import wsReducer from "./WebSockets";


export const reducers = combineReducers({
  wsReducer,
});