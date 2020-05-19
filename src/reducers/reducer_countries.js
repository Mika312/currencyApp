import { GET_COUNTRIES } from "../actions/index";

const InitialState = {
  countries: []
};

export default function(state = InitialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: getCountriesInfo(action.payload)
      };
  }
  return state;
}

function getCountriesInfo(data) {
  return data
    .map(country => {
      return {
        name: country.name,
        currencyCode: country.currencies[0].code,
        flag: country.flag,
        code: country.alpha3Code
      };
    })
    .filter(country => country.currencyCode !== "USD");
}
