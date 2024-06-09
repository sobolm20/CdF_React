import React from "react"
import './Card.css'

const Card = ({ id, wine, winery, image }) => {
    return (
        <li key={id}>
            <img src={image[0]} alt={wine} />
            <h2>{wine}</h2>
            <p>{winery}</p>
        </li>
    )
}

export default Card