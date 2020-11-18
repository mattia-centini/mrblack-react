import React, {useRef, useEffect, useState}from 'react'
import MrBlack from '../media/MrBlack_v1.mp4'

function VideoBg() {
    
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)

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
    })

    return (
        <video
                ref={refContainer}
                autoPlay
                muted
                loop
                style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                opacity: loading ? 0 : 1,
                transition: "opacity, 2s ease-in-out"
                }}
      >
        <source src={MrBlack} type="video/mp4" />
      </video>
    )
}

export default VideoBg
