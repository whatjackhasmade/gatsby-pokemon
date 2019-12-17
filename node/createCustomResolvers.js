const slugify = require(`slugify`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const fs = require("fs")

const slugged = str => {
  return slugify(str).toLowerCase()
}

// Define resolvers for custom fields
module.exports = ({
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
      slug: {
        type: "String",
        resolve(source, args, context, info) {
          return slugged(source.name)
        },
      },
      gatsbyImage: {
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
