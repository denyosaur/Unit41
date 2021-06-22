import React from "react";
import { Link } from "react-router-dom";

const Coke = () => {
    return <div className="Coke">
        <div className="Coke-image">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61Q7SR0r9XL._SL1500_.jpg" alt=""></img>
        </div>
        <div className="Coke-Menu">
            <Link to="/">Menu</Link>
        </div>
    </div>

}

export default Coke;