import Layout from "../components/Layout"
import Link from 'next/link'
import Type from "../components/Type"
import { pokemonNameFormat } from "../src/js/format.js"

export default function Home({ pokemons }) {
  return (
    <Layout title="NextJS Pokedex">
      <h1 className="text-center">
        APRENDENDO A USAR REACT E NEXT COM UMA POKEDEX
        </h1>
      <ul className="flex flex-wrap justify-center">
        {pokemons.map((pokemon, index) => (
          <li key={pokemon.pokeId} className="bg-gray-300 w-full md:w-64 my-2 mx-2 rounded-full border border-black
            shadow-lg">
            <Link href={`/pokemon?id=${pokemon.pokeId}`}>
              <a className="flex items-center justify-items-center">
                <img src={pokemon.image} alt={pokemonNameFormat(pokemon.name)} />
                <div className="flex flex-col">
                  <h2 className="capitalize"><span className="font-bold">{pokemon.pokeId}.</span> {pokemonNameFormat(pokemon.name)}</h2>
                  {pokemon.typeList.map((type, index) =>(
                    <Type key={index} type={type}/>
                  ))}
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=493')
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