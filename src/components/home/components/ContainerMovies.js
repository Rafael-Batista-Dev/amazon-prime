import React, { Component } from "react";
import { connect } from "react-redux";
import CardMovies from "./CardMovies";

export class ContainerMovies extends Component {
  render() {
    const { movies } = this.props;
    let content = "";
    content =
      movies.Response === "True"
        ? movies.Search.map((movie, index) => (
            <CardMovies key={index} movie={movie} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(ContainerMovies);
