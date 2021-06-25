import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const ColorNew = () => {
    const location = useLocation();
    const history = useHistory();
    const { updateIndex } = location.data;
    const [form, setForm] = useState({ color: "", hex: "" })
    const handleChange = (evt) => {
        const { name, value } = evt.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        updateIndex(form)
        history.push("/colors")
    }

    return (
        <div className="ColorNew">
            <form className="ColorNew-form" onSubmit={handleSubmit}>
                <label htmlFor="colorName">Enter name of color:</label>
                <input type="text" name="color" placeholder="Name your color" onChange={handleChange}></input><br />
                <label htmlFor="colorHex">Enter name of color:</label>
                <input type="color" name="hex" onChange={handleChange}></input>
                <button>Submit</button>
            </form>
        </div >
    )
}

export default ColorNew;