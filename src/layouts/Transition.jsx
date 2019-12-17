//Import necessary dependencies
import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

import Transition from "../components/organisms/transition/transition"

//This variable will be responsible for our animation duration
const timeout = 500

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
const getTransitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    opacity: 1,
    transition: `all ${timeout}ms ease`,
  },
  exiting: {
    opacity: 0,
    transition: `all ${timeout}ms ease`,
  },
}

class TransitionLayout extends React.PureComponent {
  render() {
    //Destructuring props to avoid garbage this.props... in return statement
    const { children, location, pageContext } = this.props

    return (
      <>
        {pageContext && pageContext.number && (
          <Transition>
            {pageContext.number} <span className="slash--double" />
            {pageContext.name}
          </Transition>
        )}
        <TransitionGroup>
          <ReactTransition
            key={location.pathname}
            timeout={{
              enter: pageContext.number ? timeout : 100,
              exit: pageContext.number ? timeout : 100,
            }}
          >
            {//Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
            status => (
              <div
                style={{
                  ...getTransitionStyles[status],
                }}
              >
                {children}
              </div>
            )}
          </ReactTransition>
        </TransitionGroup>
      </>
    )
  }
}

export default TransitionLayout
