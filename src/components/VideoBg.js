import React, {useRef, useEffect, useState}from 'react'
import MrBlack from '../media/MrBlack_v1.mp4'

function VideoBg() {
    
    const refContainer = useRef()

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
                transition: "opacity, 0.5s ease-in-out"
                }}
      >
        <source src={MrBlack} type="video/mp4" />
      </video>
    )
}

export default VideoBg
