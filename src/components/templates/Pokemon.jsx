import React from "react"

import Info from "../organisms/info/info"
import Transition from "../organisms/transition/transition"

export default ({ pageContext }) => (
  <>
    <Transition>
      {pageContext.number} // {pageContext.name}
    </Transition>
    <Info {...pageContext} />
  </>
)
