import React, { Component } from "react";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Landing from "./components/home/Landing";

import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Landing />
      </Provider>
    );
  }
}
