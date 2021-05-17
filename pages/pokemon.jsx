import Layout from "../components/Layout"
import AbilitiesList from "../components/AbilitiesList"
import TypesList from "../components/TypesList"
import Link from "next/link"
import PokeTabs from "../components/PokeTabs"
import { firstUpper, pokemonNameFormat } from "../src/js/format.js"


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
        <Layout title={firstUpper(pokemonNameFormat(pokemon.name))}>
            <h1 className="text-center font-semibold text-5xl capitalize">
                {pokemonNameFormat(pokemon.name)}
            </h1>
            <div className="flex flex-col justify-center items-center">
                <div>

                </div>
                <img src={pokemon.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default} alt={pokemon.name} />
                    <TypesList types={types} />
                <div className="flex flex-col items-center">
                    <PokeTabs 
                        weight={pokemon.weight}
                        height={pokemon.height}
                        abilities={abilities} 
                        description={species.flavor_text_entries[textId(pokemon.id)].flavor_text}/>
                </div>
            </div>

            {/* <Link href="/">
                <a>
                    Voltar
                </a>
            </Link> */}

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
