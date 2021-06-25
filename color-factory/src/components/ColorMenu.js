import React from "react";
import { Link } from "react-router-dom";

const ColorMenu = (updateIndex) => {
    return (
        <div className="ColorMenu">
            <h2 className="ColorMenu-header">Welcome to the color factory.</h2>
            <Link to={{ pathname: "/colors/new", data: updateIndex }} className="ColorMenu-link">Add a color</Link>
        </div>
    )
}

export default ColorMenu;