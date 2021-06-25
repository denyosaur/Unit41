import React from "react";
import { Link } from "react-router-dom";

const DietCoke = () => {
    return <div className="DietCoke">
        <div className="DietCoke-image">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51X6Uqo55gL._SX466_PIbundle-24,TopRight,0,0_AA466SH20_.jpg" alt=""></img>
        </div>
        <div className="DietCoke-Menu">
            <Link to="/">Back to Vending Machine Menu</Link>
        </div>
    </div>

}

export default DietCoke;