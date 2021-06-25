import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs, clickedDog }) => {
    const handleClick = (name) => {
        clickedDog(name)
    }

    const links = dogs.map(dog => {
        const urlPath = `/dogs/${dog.name}`
        return (<Link to={urlPath} onMouseEnter={() => handleClick(dog.name)} key={dog.name}> {dog.name}</ Link>)
    })

    return (
        <div className="DogList">
            {links}
        </div>
    )
}

export default DogList;