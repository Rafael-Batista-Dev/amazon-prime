import React, { Component } from "react";
import { connect } from "react-redux";
import ContainerMovies from "./components/ContainerMovies";
import Gif from "./components/Gif";

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div style={{ marginTop: "5rem" }} className="container">
        {loading ? <Gif /> : <ContainerMovies />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
