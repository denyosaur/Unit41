import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu"
import Coke from "./Coke"
import HotCheetos from "./HotCheetos"
import DietCoke from "./DietCoke"
import Potato from "./Potato"

const VendingMachine = () => {
    return <div className="VendingMachine">
        <BrowserRouter>

            <Menu />

            <Route exact path="/coke">
                <Coke />
            </Route>
            <Route exact path="/hotcheetos">
                <HotCheetos />
            </Route>
            <Route exact path="/dietcoke">
                <DietCoke />
            </Route>
            <Route exact path="/potato">
                <Potato />
            </Route>
            <Route exact path="/">
                <VendingMachine />
            </Route>
        </BrowserRouter>
    </div>

}

export default VendingMachine;