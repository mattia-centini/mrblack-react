import React from 'react'
import Card from './Card'
import './Gallery.css'
import {photos} from './Photos'
// import foto009 from  '../media/collection/009.jpg'


function Gallery() {

    // const pictures = [
    //     {
    //         src:'https://cdn.pixabay.com/photo/2020/11/08/09/41/deer-5723225_1280.jpg',
    //         text: 'its a bambi'
    //     },
    //     {
    //         src:'https://cdn.pixabay.com/photo/2020/04/11/14/55/houses-5030731_1280.jpg',
    //         text:'its a house'
    //     }
    // ]


    return (
        <div className='gallery'>            
            <div className='gallery__container'>
                {photos.map((picture) => (
                    <Card
                        src={picture.src}
                        text={picture.text}
                        key={Math.random()}
                    />
                )  
                )}
                

            </div>
        </div>
    )
}

export default Gallery
