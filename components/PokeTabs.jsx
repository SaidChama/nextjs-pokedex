import TabStyle from '../styles/pokeTabsStyle.module.css'
import { useState } from 'react'
import AbilitiesList from "../components/AbilitiesList"

export default function PokeTabs({weight, height, abilities, description}) {
    const [ toggleState, setToggleState ] = useState(1)


    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (

        <div className="flex flex-col border rounded-3xl w-96 flex-wrap">
            <div className="tabs-header bg-white flex mb-5 justify-around items-end">
                <div className="w-20 flex flex-col justify-center items-center cursor-pointer" onClick={() => toggleTab(1)}>
                    <div className={`mx-1 `} >Description</div>
                    <div className={`${toggleState === 1 ? TabStyle.tabActive : ''}`}></div>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => toggleTab(2)}>
                    <div className={`mx-1`}>About</div>
                    <div className={toggleState === 2 ? TabStyle.tabActive : ''}></div>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => toggleTab(3)}>
                    <div className={`mx-1 `}> Stats</div>
                    <div className={toggleState === 3 ? TabStyle.tabActive : ''}></div>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => toggleTab(4)}>
                    <div className={`mx-1 `}>Evolutions</div>
                    <div className={toggleState === 4 ? TabStyle.tabActive : ''}></div>
                </div>
            </div>
            <div className={`${TabStyle.content} ${toggleState === 1 ? TabStyle.contentActive : ''}`}>
                <p>{description}</p>
            </div>
            <div className={`${TabStyle.content} ${toggleState === 2 ? TabStyle.contentActive : ''}`}>
                <p>Height: {height} ft</p>
                <p>Weight: {weight} lb</p>
                <AbilitiesList abilities={abilities} />
            </div>
            <div className={`${TabStyle.content} ${toggleState === 3 ? TabStyle.contentActive : ''}`}>
                <p>HP</p>
                <p>Attack</p>
                <p>Defense</p>
                <p>Sp. Attack</p>
                <p>Sp. Defense</p>
                <p>Speed</p>

            </div>
            <div className={`${TabStyle.content} ${toggleState === 4 ? TabStyle.contentActive : ''}`}>
                <p>Titulo 4</p>
                <p>Conteudo 4</p>
            </div>
        </div>
    )
}
