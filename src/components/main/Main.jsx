import React from "react";
import { Route, Switch } from "react-router-dom";
import { PokemonsList, Home } from "./../index";
import "./Main.module.scss";
const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/test" component={PokemonsList} />
            </Switch>
        </main>
    );
}

export default Main;