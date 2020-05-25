import { GET_RATE_EXCHANGE } from "../actions/index";

const initialeState = {
  rateExchangeList: []
};

export default function(state = initialeState, action) {
  switch (action.type) {
    case GET_RATE_EXCHANGE:
      return {
        ...state,
        rateExchangeList: [action.payload, ...state.rateExchangeList]
      };
    default:
      return state;
  }
}
