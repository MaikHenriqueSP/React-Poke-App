import React, { Component } from "react";
import { Header, Main, Footer} from "./components/index";
import "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
// import { fetchData } from "./api/index";

class App extends Component {
    // async componentDidMount() {
    //     const data = await fetchData();
    //     console.log(data);
    // }

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