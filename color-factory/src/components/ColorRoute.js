import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Colors from "./Colors";
import ColorNew from "./ColorNew";
import ColorPage from "./ColorPage";

const ColorRoute = () => {
    return (
        <Switch>
            <Route exact path="/colors"><Colors /></Route>
            <Route exact path="/colors/new"><ColorNew /></Route>
            <Route exact path="/colors/:color"><ColorPage /></Route>
            <Redirect to="/colors" />
        </Switch>
    )
}

export default ColorRoute;