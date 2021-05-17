import TabStyle from '../styles/pokeTabsStyle.module.css'
import { useState } from 'react'

export default function PokeTabs() {
    const [ toggleState, setToggleState ] = useState(1)


    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (

        <div className="flex flex-col border rounded-lg ">
            <div className="tabs-header bg-white flex mb-5">
                <div className="flex flex-col justify-center items-center cursor-pointer mx-1" onClick={() => toggleTab(1)}>
                    <div className="mx-7 my-2" >Description</div>
                    <div className={toggleState === 1 ? TabStyle.tabActive : ''}></div>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer mx-1" onClick={() => toggleTab(2)}>
                    <div className="mx-7 my-2">About</div>
                    <div className={toggleState === 2 ? TabStyle.tabActive : ''}></div>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer mx-1" onClick={() => toggleTab(3)}>
                    <div className="mx-7 my-2"> Stats</div>
                    <div className={toggleState === 3 ? TabStyle.tabActive : ''}></div>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer mx-1" onClick={() => toggleTab(4)}>
                    <div className="mx-7 my-2">Evolutions</div>
                    <div className={toggleState === 4 ? TabStyle.tabActive : ''}></div>
                </div>
            </div>
            <div className={`${TabStyle.content} ${toggleState === 1 ? TabStyle.contentActive : ''}`}>
                <p>Titulo 1</p>
                <p>Conteudo 1</p>
            </div>
            <div className={`${TabStyle.content} ${toggleState === 2 ? TabStyle.contentActive : ''}`}>
                <p>Titulo 2</p>
                <p>Conteudo 2</p>
            </div>
            <div className={`${TabStyle.content} ${toggleState === 3 ? TabStyle.contentActive : ''}`}>
                <p>Titulo 3</p>
                <p>Conteudo 3</p>
            </div>
            <div className={`${TabStyle.content} ${toggleState === 4 ? TabStyle.contentActive : ''}`}>
                <p>Titulo 4</p>
                <p>Conteudo 4</p>
            </div>
        </div>
    )
}
