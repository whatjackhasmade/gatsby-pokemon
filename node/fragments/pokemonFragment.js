const pokemonFragment = `
	id
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
	classification
	evolutionRequirements {
		amount
		name
	}
	fleeRate
	height {
		minimum
		maximum
	}
	image
	maxCP
	maxHP
	name
	number
	resistant
	slug
	types
	weaknesses
	weight {
		minimum
		maximum
	}
`

module.exports = pokemonFragment
