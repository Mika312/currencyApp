import { combineReducers } from "redux";
import reducerCountries from "./reducer_countries";

const rootReducer = combineReducers({
  countriesReducer: reducerCountries
});

export default rootReducer;
