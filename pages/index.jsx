import Layout from "../components/Layout"
import Link from 'next/link'
import Type from "../components/Type"
import { pokemonNameFormat } from "../src/js/format.js"
import PokeCard from '../styles/pokeCard.module.css'
import Pokeball from '../components/ShadowPokeballBg'
import Image from 'next/image'


import React from 'react'

export default function Home({ pokemons }) {
    return (
        <Layout title="NextJS Pokedex">
            <h1 className="text-center">
                APRENDENDO A USAR REACT E NEXT COM UMA POKEDEX
          </h1>
            <ul className="flex flex-wrap justify-center">
                {pokemons.map((pokemon, index) => (
                    <li key={pokemon.pokeId} className="bg-white w-80 my-2 mx-2 box-border">
                        <div className="bg-gray-100 h-52 flex content-center justify-center border border-black rounded-3xl overflow-hidden">
                            <Link href={`/pokemon?id=${pokemon.pokeId}`}>
                                <a className={`flex items-center justify-around h-full w-full ${PokeCard[pokemon.typeList[0]]}`}>
                                    <div className="flex flex-col justify-start items-start h-28 box-border z-10">
                                        <p className="capitalize text-white font-semibold text-2xl"><span className="font-bold text-white">{pokemon.pokeId}.</span> {pokemonNameFormat(pokemon.name)}</p>
                                        {pokemon.typeList.map((type, index) => (
                                            <Type key={index} type={type} />
                                        ))}
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
            </ul>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
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