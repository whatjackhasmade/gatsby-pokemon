const path = require(`path`)
const slugify = require(`slugify`)

const imageFragment = `
image {
		file {
			childImageSharp {
				fluid {
					base64
					tracedSVG
					aspectRatio
					src
					srcSet
					srcWebp
					srcSetWebp
					sizes
					originalImg
					originalName
					presentationWidth
					presentationHeight
				}
			}
		}
	}
`

const pokemonFragment = `
	id
	number
	weight {
		minimum
		maximum
	}
	height {
		minimum
		maximum
	}
	classification
	types
	resistant
	attacks {
		fast {
			name
			type
			damage
		}
		special {
			name
			type
			damage
		}
	}
	weaknesses
	fleeRate
	maxCP
	evolutionRequirements {
		amount
		name
	}
	maxHP
	image
	name
`

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
      const pagePath = slugify(pokemon.name.toLowerCase())
      actions.createPage({
        path: pagePath,
        component: path.resolve(`./src/components/templates/Pokemon.jsx`),
        context: {
          ...pokemon,
        },
      })
    })
  })
}
