/* --------- Programatically Create Pages --------- */
const createPokemonPages = require(`./node/createPokemonPages`)

exports.createPages = async ({ actions, graphql }) => {
  await createPokemonPages({ actions, graphql })
}
