import React from "react";

import { Link } from "react-router-dom";

const ColorIndex = ({ index }) => {
    const colorIndices = index.map(pair => {
        return (
            <div className="ColorIndex-color" key={pair.color}><Link to={{
                pathname: `/colors/${pair.color}`,
                state: pair.hex
            }} >{pair.color}</Link></div>
        )
    })
    return (
        <div className="ColorIndex">
            <p className="ColorIndex-directions">Please select a color.</p>
            <div className="ColorIndex-list">
                {colorIndices}
            </div>
        </div>
    )
}

export default ColorIndex;