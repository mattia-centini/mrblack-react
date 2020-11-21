import React from 'react'
import './Card.css'

function Card({src, text}) {
    return (
        <div className='card'>
            <img src={src} alt={text}/>
            {/* <p>{text}</p> */}
        </div>
    )
}

export default Card
