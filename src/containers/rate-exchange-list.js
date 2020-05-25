import React, { Component } from "react";
import { connect } from "react-redux";
import RateExchangeItem from "../components/rate-exchange-item";

class RateExchangeList extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Pays</th>
            <th className="col-md-6">Valeur de la Monnaie par rapport au $</th>
          </tr>
        </thead>
        <tbody>
          {this.props.rateExchangeList.map((r, index) => (
            <RateExchangeItem key={r.code + index} rateExchange={r} />
          ))}
        </tbody>
      </table>
    );
  }
}
function mapStateToProps(state) {
  return {
    rateExchangeList: state.rateExchangeReducer.rateExchangeList
  };
}

export default connect(mapStateToProps, undefined)(RateExchangeList);
