import React, { useState } from "react";

import ColorMenu from "./ColorMenu"
import ColorIndex from "./ColorIndex"

const Colors = () => {
    const INITIAL = [
        { color: "blue", hex: "#0000FF" },
        { color: "blue violet", hex: "#8A2BE2" },
        { color: "coral", hex: "#FF7F50" },
        { color: "cyan", hex: "#00FFFF" },
    ]

    const [index, setIndex] = useState(JSON.parse(localStorage.getItem("index")) || INITIAL);

    const updateIndex = (newPair) => {
        let colors = [...index, newPair];
        setIndex(colors);
        localStorage.setItem("index", JSON.stringify(colors));
    };

    return (
        <div className="Colors">
            <ColorMenu updateIndex={updateIndex} />
            <ColorIndex index={index} />
        </div>
    )
}

export default Colors;