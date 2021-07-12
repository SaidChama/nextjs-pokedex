import Layout from "../../components/Layout"
import TypesList from "../../components/TypesList"
import Link from "next/link"
import Image from "next/image"
import PokeTabs from "../../components/PokeTabs"
import PokeCard from "../../styles/pokeCard.module.css"
import Pokeball from "../../components/ShadowPokeBallBg"
import { IoChevronBackOutline } from "react-icons/io5"
import { numberFormat, firstUpper, pokemonNameFormat } from "../../src/js/format.js"


export default function pokemon({ pokemon, abilities, types, species }) {
    const textId = (id) => {
        let textId = ''
            if (id <= 151) {
                textId = 44
            } else if (id <= 251) {
                textId = 41
            } else if (id <= 386) {
                textId = 38
            } else if (id <= 493) {
                textId = 33
            } else {
                textId = 44
            }
        return textId
    }

    return (
        <Layout title={firstUpper(pokemonNameFormat(pokemon.name))} bg="bg-gray-100">
            <div className="flex flex-col items-center justify-center">
                <div className={`flex flex-col justify-between w-96 border rounded-t-3xl shadow-lg relative ${PokeCard[types[0]]}`}>
                    <div className="flex items-center justify-around h-16">
                        <div className="mt-2 border-white border-0 rounded-md hover:border-2">
                            <Link href="/">
                                <a className="text-white font-bold text-3xl"><IoChevronBackOutline /></a>
                            </Link>
                        </div>
                        <h1 className="text-center font-semibold text-4xl capitalize text-white z-20">
                            {pokemonNameFormat(pokemon.name)} #{numberFormat(pokemon.id)}
                        </h1>
                    </div>
                    <div className="h-48 flex items-center justify-center relative">
                        <div className={`absolute h-40 w-40 ${PokeCard[types[0]]}`}>
                            <Pokeball />
                        </div>
                        <div className="absolute left-14">
                            <Image src={pokemon.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default} alt={pokemon.name} 
                                height={200} width={200}/>
                        </div>
                        <div className="absolute right-5">
                            <TypesList types={types} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <PokeTabs 
                        weight={pokemon.weight}
                        height={pokemon.height}
                        abilities={abilities} 
                        description={species.flavor_text_entries[textId(pokemon.id)].flavor_text}
                        stats={pokemon.stats.map((poke) => {return poke.base_stat})}/>
                </div>
            </div>

        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    const id = query.id
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json()
    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const species = await speciesRes.json()

    const abilities = pokemon.abilities.map((abilities) => {
        return abilities
    })

    const types = pokemon.types.map((types) => {
        const type = types.type.name
        return type
    })

    return {
        props: {
            pokemon,
            abilities,
            types,
            species
        }
    };
}
