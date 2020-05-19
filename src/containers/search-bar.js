import React, { Component } from "react";
import { fetchCountries } from "../actions/index";
import { connect } from "react-redux";

class SearchBar extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  renderSelectContries() {
    return (
      <select className="form-control search_bar">
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
  fetchCountries
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
