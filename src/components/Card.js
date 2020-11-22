import React from 'react'
import './Card.css'

function Card({src, text}) {
    return (
        <div className='card'>
            {/* <img src={src} alt={text}/> */}
            <div className='card__image'
            style={{
                backgroundImage: `url(${src})`,
            }}
            ></div>
        </div>
    )
}

export default Card
