/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export const Vertical = ({ ...props }) => {
  const children = React.Children.toArray(props.children)

  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        maxHeight: '100vh',
        textAlign: 'center',
        img: {
          flex: '1 1 auto',
          maxHeight: '66vh',
          maxWiddth: '80vw'
        }
      }}>
      {children}
    </div>
  )
}

export default Vertical