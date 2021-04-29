
import Layout from "../components/Layout"
import Link from 'next/link'

export default function Home({ pokemons }) {
  console.log(pokemons)
  return (
    <Layout title="NextJS Pokedex">
        <h1>
         APRENDENDO A USAR REACT E NEXT COM UMA POKEDEX
        </h1>
        <ul className="box-border flex flex-col flex-wrap">
          {pokemons.map((pokemon) => (
            <Link href={'/pokemon?id='+pokemon.pokeId}>
              <a className="box-border w-1/2 bg-gray-200 my-2 flex border-2 border-black rounded-lg border-opacity-100">
                <li key={pokemon.pokeId} className="flex">
                  <img src={pokemon.image} alt={pokemon.name} />
                  <h2>{pokemon.pokeId}. {pokemon.name}</h2>
                </li>
              </a>
            </Link>
          ))}
        </ul>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const {results} = await res.json()
  const pokemons = results.map((result, index) => {
    const pokeId = index + 1
    const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/'+pokeId+'.png'
    return {
      ...result,
      pokeId,
      image
    }
  })
    return {
      props: {pokemons}
    };
}