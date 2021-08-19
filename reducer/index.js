import changeValueReducer from "./ChangeValue";
import isLogged from "./isLogged";
import { combineReducers } from "redux";

const reducer = combineReducers({
  changeValue: changeValueReducer,
  isLogged: isLogged,
});

export default reducer;
