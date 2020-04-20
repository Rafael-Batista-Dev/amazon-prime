import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/home/Landing";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Landing />
      </>
    );
  }
}
