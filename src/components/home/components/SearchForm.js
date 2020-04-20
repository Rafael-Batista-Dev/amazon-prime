import React, { Component } from "react";
import { connect } from "react-redux";

import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../../api/searchActions";

export class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <>
        <form className="form-inline" id="searchForm" onSubmit={this.onSubmit}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Pesquisar..."
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn-outline-info">
            Pesquisar
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(SearchForm);
