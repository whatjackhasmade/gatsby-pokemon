import { useStaticQuery, graphql } from "gatsby"

export const useAllPokemonQuery = () => {
  const { poke } = useStaticQuery(
    graphql`
      query AllPokemon {
        poke {
          pokemons(first: 500) {
            ...PokemonFragment
          }
        }
      }
    `
  )
  return poke.pokemons
}

export default useAllPokemonQuery
