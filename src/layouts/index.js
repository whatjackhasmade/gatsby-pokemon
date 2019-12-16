import React from "react"
import Transition from "./Transition"

const Layout = props => {
  const { children, location } = props
  return <Transition {...props}>{children}</Transition>
}

export default Layout
