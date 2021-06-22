import './App.css';

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/Menu"
import Coke from "./components/Coke"
import HotCheetos from "./components/HotCheetos"
import DietCoke from "./components/DietCoke"
import Potato from "./components/Potato"

function App() {
  return (
    <div className="App">
      <h1>Vending Machine</h1>
      <BrowserRouter>
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
          <Menu />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
