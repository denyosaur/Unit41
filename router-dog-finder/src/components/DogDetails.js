import React from "react";

const DogDetails = ({ dogInfo }) => {
    const factList = dogInfo.facts.map((fact, idx) => {
        return <li key={idx}>{fact}</li>
    })

    return (
        <div className="DogDetails">
            <h3 className="DogDetails-name">{dogInfo.name}</h3>
            <div className="DogDetails-img"><img src={dogInfo.src} alt="" /></div>
            <div className="DogDetails-age">Age: {dogInfo.age}</div>
            <div className="DogDetails-facts">Facts: <ul>{factList}</ul></div>
        </div>
    )
}

export default DogDetails;