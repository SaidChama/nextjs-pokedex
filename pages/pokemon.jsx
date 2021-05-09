import Layout from "../components/Layout"
import Type from "../components/Type"
import Link from 'next/link'
import { removeSpecialChars, firstUpper, pokemonNameFormat } from "../src/js/format.js"

export default function pokemon({ pokemon, abilities, types }) {
    return (
        <Layout title={firstUpper(pokemonNameFormat(pokemon.name))}>
            <h1 className="text-center font-semibold text-5xl capitalize">
                {pokemonNameFormat(pokemon.name)}
            </h1>
            <div className="flex">
                <img src={pokemon.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default} alt={pokemon.name} />
                <div className="flex flex-col">
                {abilities.map((id, index) => (
                        id.is_hidden ?
                        <li className="capitalize" key={index}>Hidden: {removeSpecialChars(id.ability.name)}</li>                
                        :
                        <li className="capitalize" key={index}>Ability {index + 1}: {removeSpecialChars(id.ability.name)}</li>
                    ))}
                    {types.map((type, index) => (
                        <Type key={index} type={type}/>
                    ))}
                    <h1>Height: {pokemon.height} ft</h1>
                    <h1>Weight: {pokemon.weight} lb</h1>
                </div>
            </div>

            <Link href="/">
                <a>
                    Voltar
            </a>
            </Link>
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    const id = query.id
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json()

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
            types
        }
    };
}
