import React from "react"

import StyledCredit from "./creditStyles"

const Credit = ({ children }) => (
  <StyledCredit className="credit">
    <a href="https://app.netlify.com/sites/gatsby-pokemon/deploys">
      <img
        alt="Build status"
        src="https://api.netlify.com/api/v1/badges/c9c55de4-8b3b-4514-8956-52afcc265630/deploy-status"
      />
    </a>
    <footer>
      Created by <a href="https://whatjackhasmade.co.uk">Jack Pritchard</a>
    </footer>
  </StyledCredit>
)

export default Credit
