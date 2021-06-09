
import { combineReducers } from "redux";
import { userReducer } from "./signUpReducers";

export default combineReducers({ user: userReducer }); 