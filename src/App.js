import React, { Component } from "react";
import { Header, Main, Footer } from "./components/index";
import "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Header />
                    <Main />
                    <Footer />
                </Router>
            </>
        );
    }
}

export default App;