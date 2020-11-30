import React, {useState, useRef} from 'react'
import './Card.css'


function Card({src}) {

    const [style, setStyle] = useState(true);
    // const refContainer = useRef()

    function changeState(){

        setStyle(() => !style)
        console.log(style)
    }

    // window.addEventListener('click', () => {
    //     if(!style){
    //         setStyle(() => style)}
    //     console.log('i clicked')
    // })

    return (
        <div className={style? 'card' : 'card__imageFullScreen'}>
            <div className='card__image'
            onClick={changeState}
            style={{
                backgroundImage: `url(${src})`,
            }}
            ></div>
        </div>
    )
}

export default Card
