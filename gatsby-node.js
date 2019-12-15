/* --------- Programatically Create Image Nodes --------- */

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    POKE_Pokemon: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.image,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

/* --------- Programatically Create Pages --------- */
const createPokemonPages = require(`./node/createPokemonPages`)

exports.createPages = async ({ actions, graphql }) => {
  await createPokemonPages({ actions, graphql })
}
