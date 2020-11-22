import React from 'react'
import Card from './Card'
import './Gallery.css'
import {photos} from './Photos'


function Gallery() {



    return (
        <div className='gallery'>
            <div className='test'>
            <div className='gallery__container'>
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
                     
            
         </div>
    )
}

export default Gallery
