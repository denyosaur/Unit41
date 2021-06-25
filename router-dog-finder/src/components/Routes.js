import React, { useState } from "react";

import DogList from "./DogList";
import DogDetails from "./DogDetails";

import { Switch, Route, Redirect } from "react-router-dom";

const DogRoutes = ({ dogs }) => {
    const [dogInfo, setDogInfo] = useState({});

    let clickedDog = (name) => {
        const dogDetails = dogs.find(details => details.name === name);
        setDogInfo(dogDetails);
    };

    return (
        <Switch>
            <Route exact path="/dogs" >
                <DogList dogs={dogs} clickedDog={clickedDog} />
            </Route>
            <Route path="/dogs/:name" >
                <DogDetails dogInfo={dogInfo} />
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
};

export default DogRoutes;