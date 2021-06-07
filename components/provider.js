import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'


const Provider = ({children}) => {
  return (
    <>
      <iframe
        title={Math.random()}
        src="https://traumaticimpoliteregisters.maxwofford.repl.co/visualizer.html"
        sx={{
          position: 'fixed',
          pointerEvents: 'none',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
        }} />
      {children}
    </>
  )
}
export default Provider