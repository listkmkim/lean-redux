import { combineReducers } from "redux";
import counter from "./counter";
import filter from "./filter";
import todo from "./todo";

export default combineReducers({ filter, todo, counter });
