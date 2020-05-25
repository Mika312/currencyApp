import React, { Component } from "react";
import { fetchCountries, fetchRateExchange } from "../actions/index";
import { connect } from "react-redux";
const lodash = require("lodash");
class SearchBar extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  renderSelectContries() {
    return (
      <select
        onChange={e => this.handleChange(e)}
        className="form-control search_bar"
      >
        {this.props.countries.map(country => {
          return (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          );
        })}
      </select>
    );
  }

  handleChange = e => {
    const countryCode = e.target.value;
    const country = lodash.find(this.props.countries, { code: countryCode });
    this.props.fetchRateExchange(country);
  };

  render() {
    return <form className="form-group">{this.renderSelectContries()}</form>;
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countriesReducer.countries
  };
};

const mapDispatchToProps = {
  fetchCountries,
  fetchRateExchange
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
