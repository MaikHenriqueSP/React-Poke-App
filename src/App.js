import React, { Component } from "react";
import { Header, Main, Footer } from "./components/index";
import "./App.module.scss";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        );
    }
}

export default App;