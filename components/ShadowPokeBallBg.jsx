import Pokeball from '../styles/shadowPokeball.module.css'

import React from 'react'

export default function ShadowPokeBallBg() {
    return (
        <div className={`flex items-center justify-center relative rounded-full h-full w-full ${Pokeball.align}`}>
            <div className={`absolute rounded-full h-full w-full ${Pokeball.outer}`}></div>
            <div className={`absolute h-11 w-11 rounded-full ${Pokeball.innerCut}`}></div>
            <div className={`absolute h-3 w-full ${Pokeball.innerCutRectangle}`}></div>
            <div className={`absolute h-5 w-5 rounded-full ${Pokeball.innerCircle}`}></div>
        </div>
    )
}

