const imageFragment = `
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
`

module.exports = imageFragment
