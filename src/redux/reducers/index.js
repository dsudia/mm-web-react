import { combineReducers } from "redux";
import { userReducer } from "./user";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  user: userReducer,
  routing: routerReducer
});

export default rootReducer;
