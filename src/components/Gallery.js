import React, {useState, useEffect, useRef} from 'react'
import Card from './Card'
import './Gallery.css'
import {photos} from './Photos'


function Gallery() {

const [loading, setLoading] = useState()
const refContainer = useRef()

useEffect(() => {
    const {current} = refContainer
    console.log('page has loaded')
    current.addEventListener('load', () => {
        console.log('page has loaded')
    })


})


    return (
        <div className='gallery'
        ref={refContainer}
        >
            
            <div className='gallery__container'
                
            >
                {photos.map((picture) => (
                            <Card
                            
                        src={picture.src}
                        // text={picture.text}
                        key={Math.random()}
                    />
                )  
                )}
            </div>
         </div>
    )
}

export default Gallery
