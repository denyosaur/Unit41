import React from "react";
import { Link } from "react-router-dom";

const Potato = () => {
    return <div className="Potato">
        <div className="Potato-image">
            <img src="https://www.alimentarium.org/en/system/files/thumbnails/image/AL027-01_pomme_de_terre_0.jpg" alt=""></img>
        </div>
        <div className="Potato-Menu">
            <Link to="/">Back to Vending Machine Menu</Link>
        </div>
    </div>

}

export default Potato;