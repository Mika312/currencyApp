import { combineReducers } from "redux";
import reducerCountries from "./reducer_countries";
import reducerRateExchange from "./reducer_rate_exchange";

const rootReducer = combineReducers({
  countriesReducer: reducerCountries,
  rateExchangeReducer: reducerRateExchange
});

export default rootReducer;
