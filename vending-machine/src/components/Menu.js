import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return <div className="Menu">
        <Link to="/coke">Coke</Link>
        <Link to="/hotcheetos">Hot Cheetos</Link>
        <Link to="/dietcoke">Diet Coke</Link>
        <Link to="/potato">Potato</Link>
    </div>
}

export default Menu;