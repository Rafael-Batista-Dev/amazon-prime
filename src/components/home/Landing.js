import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Gif from './components/Gif'

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <h1 style={{ marginTop: "5rem" }}>Container</h1>
        {loading ? <Gif />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);

const Container = styled.div``;
