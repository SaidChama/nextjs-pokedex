import Layout from "../components/Layout"
import Link from 'next/link'
import { numberFormat, pokemonNameFormat } from "../src/js/format.js"
import PokeCard from "../styles/pokeCard.module.css"
import Pokeball from "../components/ShadowPokeballBg"
import Image from "next/image"
import InfiniteScroll from "react-infinite-scroll-component"
import { useState, useEffect } from "react"
import TypesList from "../components/TypesList"


export default function Home({ pokemons }) {
    const [ pokes, setPokes ] = useState(pokemons)
    const [ hasMore, setHasMore] = useState(true)

    const getMorePokes = async() => {
        const limit = pokes.length == 480 ? 13 : 24

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${pokes.length}`)
        const newRes  = await res.json()
        const results = newRes.results

        const newPokes = await Promise.all(results.map(async (result, index) => {
            const pokeId = index + pokes.length + 1
            const url = result.url
            let pokemon = await fetch(url)
            pokemon = await pokemon.json()
            const image = pokemon.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default
            const typeList = pokemon.types.map((obj) => {
                return obj.type.name
            })
            return {
                ...result,
                pokeId,
                image,
                index,
                typeList
            }
        }))
        setPokes(pokes => [...pokes, ...newPokes])
    }

    useEffect(() => {
        setHasMore(pokes.length >= 493 ? false : true)
    }, [pokes])
    
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <Layout title="NextJS Pokedex">
            <h1 className="text-center">
                APRENDENDO A USAR REACT E NEXT COM UMA POKEDEX                
            </h1>
                <ul className="flex flex-wrap justify-center">
                <InfiniteScroll
                    dataLength = {pokes.length}
                    next={getMorePokes}
                    hasMore={hasMore}
                    loader={<div className="w-80 flex items-start justify-center">
                        <Image src='/images/loading.gif' width={150} height={150} alt="Loading..." />
                        </div>}                    
                    endMessage={
                        // <div className="pr-96 pl-96">
                            <button onClick={scrollToTop} 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10 mt-10 sm:mx-64 md:mx-68 lg:mx-112">
                                    Go Back To Top
                            </button>
                        // </div> 
                        }
                    style={{display: 'flex', flexWrap:'wrap', alignItems: 'center', justifyContent: 'center'}}
                    >
                    {pokes.map((pokemon, index) => (

                    <li key={pokemon.pokeId} className="bg-white w-80 my-2 mx-2 box-border">
                        <div className="bg-gray-100 h-52 flex content-center justify-center border border-black rounded-3xl overflow-hidden">
                            <Link href={`/pokemon?id=${pokemon.pokeId}`}>
                                <a className={`flex items-center justify-around h-full w-full ${PokeCard[pokemon.typeList[0]]}`}>
                                    <div className="flex flex-col justify-start items-start h-28 box-border z-10">
                                        <p className="capitalize text-white font-semibold text-2xl"><span className="font-bold text-white">{numberFormat(pokemon.pokeId)}.</span> {pokemonNameFormat(pokemon.name)}</p>
                                        <TypesList types={pokemon.typeList}/>
                                    </div>
                                    <div className={`h-full flex items-center justify-center ${PokeCard[pokemon.typeList[0]]}`}>
                                        <Pokeball/>
                                        <div className="absolute mr-20 mt-10">
                                            <Image layout="fixed" src={pokemon.image} alt={pokemonNameFormat(pokemon.name)} width={160} height={160}/>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </li>
                    ))}
                </InfiniteScroll>
            </ul>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=24&offset=0')
    const { results } = await res.json()
    const pokemons = await Promise.all(results.map(async (result, index) => {
        const pokeId = index + 1
        const url = result.url
        let pokemon = await fetch(url)
        pokemon = await pokemon.json()
        const image = pokemon.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default
        const typeList = pokemon.types.map((obj) => {
            return obj.type.name
        })
        return {
            ...result,
            pokeId,
            image,
            index,
            typeList
        }
    }))
    return {
        props: { pokemons }
    };
}