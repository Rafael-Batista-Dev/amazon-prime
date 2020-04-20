import React, { Component } from "react";
import styled from "styled-components";

export class Landing extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ marginTop: "5rem" }}>Container</h1>
      </div>
    );
  }
}

export default Landing;

const Container = styled.div``;
