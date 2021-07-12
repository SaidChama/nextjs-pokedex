import TabStyle from "../styles/pokeTabsStyle.module.css"
import { useState } from "react"
import AbilitiesList from "../components/AbilitiesList"

export default function PokeTabs({weight, height, abilities, description, stats}) {
    const statBarColor = (stat) => {
        let color = ''
        if (stat < 60) {
            color = 'rgb(255, 0, 0)'
        } else if (stat < 80) {
            color = 'rgb(255, 115, 0)'
        } else if (stat < 100) {
            color = 'rgb(255, 230, 0)'
        } else if (stat < 115) {
            color = 'rgb(179, 255, 0)'
        } else if (stat < 130) {
            color = 'rgb(72, 255, 0)'
        } else if (stat < 160) {
            color = 'rgb(0, 255, 98)'
        } else {
            color = 'rgb(0, 255, 242)'
        }
        return color
    }

    const statTotalBarColor = (stat) => {
        let color = ''
        if (stat < 250) {
            color = 'rgb(255, 115, 0)'
        } else if (stat < 350) {
            color = 'rgb(255, 230, 0)'
        } else if (stat < 450) {
            color = 'rgb(179, 255, 0)'
        } else if (stat < 550) {
            color = 'rgb(72, 255, 0)'
        } else {
            color = 'rgb(0, 255, 242)'
        }
        return color
    }


    const [ toggleState, setToggleState ] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="flex flex-col w-96 flex-wrap shadow-lg border-box bg-white border rounded-b-3xl">
            <div className="bg-white flex justify-around items-end relative border-box my-2">
                <div className="bg-gray-400 absolute" style={{height: "2px", width: "99%"}}></div>
                <div className="w-full flex justify-around items-end">
                    <div className="flex flex-col justify-between items-center cursor-pointer relative h-8" onClick={() => toggleTab(1)}>
                        <h2 className="mx-1 text-lg">Description</h2>
                        <div className={`${toggleState === 1 ? TabStyle.tabActive : ''}`}></div>
                    </div>
                    <div className="flex flex-col justify-between items-center cursor-pointer relative h-8" onClick={() => toggleTab(2)}>
                        <h2 className="mx-1 text-lg">About</h2>
                        <div className={toggleState === 2 ? TabStyle.tabActive : ''}></div>
                    </div>
                    <div className="flex flex-col justify-between items-center cursor-pointer relative h-8" onClick={() => toggleTab(3)}>
                        <h2 className="mx-1 text-lg"> Stats</h2>
                        <div className={toggleState === 3 ? TabStyle.tabActive : ''}></div>
                    </div>
                </div>
            </div>
            <div className={`border-box  ml-5 mb-5 mr-5 mt-2 ${TabStyle.content} ${toggleState === 1 ? TabStyle.contentActive : ''}`}>
                <p className="text-justify">{description}</p>
            </div>
            <div className={`border-box  ml-5 mb-5 mr-5 mt-2 ${TabStyle.content} ${toggleState === 2 ? TabStyle.contentActive : ''}`}>
                <h3 className="text-lg font-semibold">Characteristics: </h3>
                <p className="text-gray-800 font-semibold">Height: <span className="text-black font-semibold">{(height * 0.3048).toFixed(2)} m ({height} ft)</span></p>
                <p className="text-gray-800 font-semibold">Weight:  <span className="text-black font-semibold">{(weight * 0.453592).toFixed(2)} kg ({weight} lb)</span></p>
                <h3 className="text-lg font-semibold mt-2">Abilities:</h3>
                <AbilitiesList abilities={abilities} />
            </div>
            <div className={`border-box  ml-5 mb-5 mr-5 mt-2 ${TabStyle.content} ${toggleState === 3 ? TabStyle.contentActive : ''}`}>
                <div className="flex">
                    <div className="flex flex-col mr-2">
                        <p className="text-gray-700 font-semibold">HP:</p>
                        <p className="text-gray-700 font-semibold">Attack:</p>
                        <p className="text-gray-700 font-semibold">Defense:</p>
                        <p className="text-gray-700 font-semibold">Sp. Atk:</p>
                        <p className="text-gray-700 font-semibold">Sp. Def:</p>
                        <p className="text-gray-700 font-semibold">Speed:</p>
                        <p className="text-gray-700 font-semibold">Total:</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold">{stats[0]}</p>
                        <p className="font-semibold">{stats[1]}</p>
                        <p className="font-semibold">{stats[2]}</p>
                        <p className="font-semibold">{stats[3]}</p>
                        <p className="font-semibold">{stats[4]}</p>
                        <p className="font-semibold">{stats[5]}</p>
                        <p className="font-semibold">{stats.reduce((total, num) => {return total + num})}</p>
                    </div>
                    <div className="w-56 flex flex-col justify-around ml-2">
                        <div className="flex relative items-center w-full">
                            <div className="absolute bg-gray-400 rounded-3xl" style={{height: "5px", width: "100%"}} ></div>
                            <div className="absolute bg-black rounded-3xl" style={{height: "5px", width: `${(100 * stats[0]) / 255}%`, backgroundColor: `${statBarColor(stats[0])}`}} />
                        </div>
                        <div className="flex relative items-center w-full">
                            <div className="absolute bg-gray-400 rounded-3xl" style={{height: "5px", width: "100%"}} ></div>
                            <div className="absolute bg-black rounded-3xl" style={{height: "5px", width: `${(100 * stats[1]) / 255}%`, backgroundColor: `${statBarColor(stats[1])}`}} />
                        </div>
                        <div className="flex relative items-center w-full">
                            <div className="absolute bg-gray-400 rounded-3xl" style={{height: "5px", width: "100%"}} ></div>
                            <div className="absolute bg-black rounded-3xl" style={{height: "5px", width: `${(100 * stats[2]) / 255}%`, backgroundColor: `${statBarColor(stats[2])}`}} />
                        </div>
                        <div className="flex relative items-center w-full">
                            <div className="absolute bg-gray-400 rounded-3xl" style={{height: "5px", width: "100%"}} ></div>
                            <div className="absolute bg-black rounded-3xl" style={{height: "5px", width: `${(100 * stats[3]) / 255}%`, backgroundColor: `${statBarColor(stats[3])}`}} />
                        </div>
                        <div className="flex relative items-center w-full">
                            <div className="absolute bg-gray-400 rounded-3xl" style={{height: "5px", width: "100%"}} ></div>
                            <div className="absolute bg-black rounded-3xl" style={{height: "5px", width: `${(100 * stats[4]) / 255}%`, backgroundColor: `${statBarColor(stats[4])}`}} />
                        </div>
                        <div className="flex relative items-center w-full">
                            <div className="absolute bg-gray-400 rounded-3xl" style={{height: "5px", width: "100%"}} ></div>
                            <div className="absolute bg-black rounded-3xl" style={{height: "5px", width: `${(100 * stats[5]) / 255}%`, backgroundColor: `${statBarColor(stats[5])}`}} />
                        </div>
                        <div className="flex relative items-center w-full">
                            <div className="absolute bg-gray-400 rounded-3xl" style={{height: "5px", width: "100%"}} ></div>
                            <div className="absolute bg-black rounded-3xl" style={{height: "5px", width: `${(100 * stats.reduce((total, num) => {return total + num})) / 720}%`, backgroundColor: `${statTotalBarColor(stats.reduce((total, num) => {return total + num}))}`}} />
                        </div>
                    </div>
                </div>
                

            </div>
            <div className={`border-box ml-5 mb-5 mr-5 mt-2 ${TabStyle.content} ${toggleState === 4 ? TabStyle.contentActive : ''}`}>
                <p>Titulo 4</p>
                <p>Conteudo 4</p>
            </div>
        </div>
    )
}
