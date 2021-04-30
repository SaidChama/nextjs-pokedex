import Layout from "../components/Layout"
import Link from 'next/link'
import Types from "../styles/types.module.css"

export default function pokemon({ pokemon, abilities, types }) {
    console.log(types)
    return (
        <Layout title={firstUpper(pokemon.name)}>
            <h1 className="text-center font-semibold text-5xl capitalize">
                {pokemon.name}
            </h1>
            <div className="flex">
                <img src={pokemon.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default} alt="" />
                <div className="flex flex-col">
                    {abilities.map((id, index) => (
                        <li className="capitalize" key={index}>{index + 1}. {removeSpecialChars(id.ability.name)}</li>
                    ))}
                    {types.map((id, index) => (
                        <div key={index} 
                        className={[`capitalize rounded-full border border-white text-center 
                            text-white font-semibold`, Types[id.type.name]].join(' ')}>{removeSpecialChars(id.type.name)}</div>
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
        return types
    })

    return {
        props: {
            pokemon,
            abilities,
            types
        }
    };
}

function firstUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function removeSpecialChars(str) {
    return str.replace('-', ' ')
}