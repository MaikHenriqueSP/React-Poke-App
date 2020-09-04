import React from "react";
import { Route, Switch } from "react-router-dom";
import { PokemonsList, Home, PokemonPage } from "./../index";
import "./Main.module.scss";
const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/list" exact component={PokemonsList} />
                <Route path="/list/*" component={PokemonPage} />
            </Switch>
        </main>
    );
}

export default Main;