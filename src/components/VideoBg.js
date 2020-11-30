import React, {useRef, useEffect, useState}from 'react'
import MrBlack from '../media/MrBlack_v1.mp4'
import './VideoBg.css'
import About from './About'

function VideoBg() {
    
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const [display, setDisplay] = useState(true)
    

    useEffect(() => {
        const {current} = refContainer

        const handleLoad = () => {
            console.log('the video has loaded')
        }

        current.addEventListener('loadeddata', () => {
            //after the video has loaded i set loading to false which means setting opacity 1 in my style
            setLoading(false)
        })

        current.removeEventListener('loadeddata', handleLoad)

        current.addEventListener('ended', () => {
            setDisplay(false)
        } )
    })

    return (
        <div className='videobg'>
            
            {display ? <div></div> : <About />}
            
            <video 
                ref={refContainer}
                autoPlay
                muted
                // loop={false}
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    width: "100%",
                    height: "80%",
                    // left: 0,
                    top: 80,
                opacity: loading ? 0 : 1,
                transition: "opacity, 2s ease-in-out",
                display: display ? 'block' : 'none'
                }}
                >
                <source src={MrBlack} type="video/mp4" />
             </video>
        </div>
             
        
    )
}

export default VideoBg
