import React from "react";
import { Link } from "react-router-dom";

const HotCheetos = () => {
    return <div className="HotCheetos">
        <div className="HotCheetos-image">
            <img src="https://target.scene7.com/is/image/Target/GUEST_9890f880-20fc-4f94-b325-c1c6875327ad?wid=488&hei=488&fmt=pjpeg" alt=""></img>
        </div>
        <div className="HotCheetos-Menu">
            <Link to="/">Back to Vending Machine Menu</Link>
        </div>
    </div>

}

export default HotCheetos;