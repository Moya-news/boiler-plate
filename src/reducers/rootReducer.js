import { combineReducers } from "redux";
import counter from "@reducers/counter/counter";

const rootReducer = combineReducers({ counter });

export default rootReducer;
