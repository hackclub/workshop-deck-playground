import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'


const AmongUs = ({...props}) => {
  const children = React.Children.toArray(props.children)

  return (
    <>
      {children}
    </>
  )
}
export default AmongUs