import Pokeball from '../styles/shadowPokeball.module.css'

import React from 'react'

export default function ShadowPokeBallBg() {
    return (
        <div className={Pokeball.align}>
            <div className={Pokeball.outer}></div>
            <div className={Pokeball.lowerOuter}></div>
            <div className={Pokeball.innerCut}></div>
            <div className={Pokeball.innerCutRectangle}></div>
            <div className={Pokeball.innerCircle}></div>
        </div>
    )
}

