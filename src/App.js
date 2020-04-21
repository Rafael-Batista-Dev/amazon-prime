import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";

import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
        </Router>
      </Provider>
    );
  }
}
