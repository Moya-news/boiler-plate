import { combineReducers } from "redux";
import counter from "./counter/counter";

const rootReducer = combineReducers({ counter });

export default rootReducer;
