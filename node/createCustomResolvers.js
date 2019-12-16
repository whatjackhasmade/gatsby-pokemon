const slugify = require(`slugify`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

// Define resolvers for custom fields
module.exports = ({ createResolvers }) => {
  const slugged = str => {
    return slugify(str).toLowerCase()
  }

  createResolvers({
    POKE_Pokemon: {
      slug: {
        type: "String",
        resolve(source, args, context, info) {
          return slugged(source.name)
        },
      },
    },
  })
}
