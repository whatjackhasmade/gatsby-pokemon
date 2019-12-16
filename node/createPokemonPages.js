const path = require(`path`)

const fluidImage = require(`./fragments/image/fluidFragment`)
const pokemonFragment = require(`./fragments/pokemonFragment`)

module.exports = async ({ actions, graphql }) => {
  const GET_POKEMON = `
  query GET_POKEMON ($first: Int!) {
		poke {
			pokemons(first: $first) {
				${pokemonFragment}
				evolutions {
					${pokemonFragment}
				}
			}
		}
  }
	`

  const { createPage } = actions
  const fetchPokemon = async variables =>
    await graphql(GET_POKEMON, variables).then(({ data }) => {
      return data.poke.pokemons
    })
  await fetchPokemon({ first: 500 }).then(allPokemon => {
    allPokemon.map(pokemon => {
      actions.createPage({
        path: pokemon.slug,
        component: path.resolve(`./src/components/templates/Pokemon.jsx`),
        context: {
          ...pokemon,
        },
      })
    })
  })
}
