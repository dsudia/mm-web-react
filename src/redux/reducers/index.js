import { combineReducers } from "redux";
import { currentUserReducer } from "./user";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  routing: routerReducer
});

export default rootReducer;
