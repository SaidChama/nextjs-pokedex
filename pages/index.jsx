import Layout from "../components/Layout"
import Link from 'next/link'

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
                <img src={pokemon.image} alt={pokemon.name} />
                <h2 className="capitalize"><span className="font-bold">{pokemon.pokeId}.</span> {pokemon.name}</h2>
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
  const pokemons = results.map((result, index) => {
    const pokeId = index + 1
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${pokeId}.png`
    return {
      ...result,
      pokeId,
      image,
      index
    }
  })
  return {
    props: { pokemons }
  };
}