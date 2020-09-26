import React, { Component } from "react";
import { Header, Main, Footer } from "./components/index";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Main />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
