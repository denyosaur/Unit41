import React from "react";
import { Link, useLocation } from "react-router-dom";

const ColorPage = () => {
    const location = useLocation();
    const hex = location.state
    const styling = {
        backgroundColor: hex, height: "1000px"
    }

    return (
        <div className="ColorPage" style={styling}>
            <Link to="/colors" className="ColorMenu-return">GO BACK</Link>
        </div >
    )
}

export default ColorPage;