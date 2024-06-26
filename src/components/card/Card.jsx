import React from "react"
import './Card.css'


const Card = ( {product} ) => {
    console.log(product);
    const { id, wine, winery, image } = product
    return (
        <li key={id}>
            <img src={image} alt={wine} />
            <h2>{wine}</h2>
            <p>{winery}</p>
        </li>
    )
}

export default Card