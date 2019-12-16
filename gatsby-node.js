/* --------- Create Custom Schema Fields --------- */
const createCustomResolvers = require(`./node/createCustomResolvers`)
exports.createResolvers = props => {
  createCustomResolvers(props)
}

/* --------- Programatically Create Pages --------- */
const createPokemonPages = require(`./node/createPokemonPages`)
exports.createPages = async ({ actions, graphql }) => {
  await createPokemonPages({ actions, graphql })
}
