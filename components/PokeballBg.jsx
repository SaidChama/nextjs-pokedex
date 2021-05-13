import Pokeball from '../styles/pokeball.module.css'

import React from 'react'

export default function PokeballBg() {
    return (
        <div className={Pokeball.align}>
            <div className={Pokeball.upperDiv}>
                <div className={Pokeball.outer}></div>
            </div>
            <div className={Pokeball.lowerDiv}>
                <div className={Pokeball.lowerOuter}></div>
            </div>
            <div className={Pokeball.innerCut}></div>
            <div className={Pokeball.innerCutRectangle}></div>
            <div className={Pokeball.innerCircle}></div>
        </div>
    )
}

