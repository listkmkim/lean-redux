import todo from "./todoReducer";
import filter from "./filterReducer";
import { combineReducers } from "redux";

export default combineReducers({ todo, filter });
