import React, { useState } from 'react'
import theme from '@hackclub/theme'
import { Grid } from 'theme-ui'
import CodeEditor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'

const Editor = ({ defaultValue = '', sx, ...props }) => {
  const [content, setContent] = useState(defaultValue)
  return (
    <Grid
      sx={{
        bg: 'sunken',
        p: 3,
        boxShadow: 'elevated',
        borderRadius: 'extra',
        width: ['100%', null, 640],
        div: {
          borderRadius: 12,
          border: '16px solid',
          borderColor: theme.colors.dark
        },
        pre: {
          '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
            color: theme.colors.muted
          },
          '.comment': {
            fontStyle: 'italic'
          },
          '.property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable': {
            color: theme.colors.red
          },
          '.atrule, .attr-value, .keyword': {
            color: theme.colors.blue
          },
          '.selector, .attr-name, .string, .char, .builtin, .inserted': {
            color: theme.colors.orange
          }
        },
        iframe: {
          bg: 'white',
          borderRadius: 12,
          border: '12px solid white',
          width: '100%'
        },
        ...sx
      }}
      {...props}>
      <CodeEditor
        placeholder="Type code here…"
        value={content}
        onChange={e => setContent(e.target.value)}
        onValueChange={() => { }}
        onKeyDown={e => e.nativeEvent.stopImmediatePropagation()}
        highlight={code => highlight(code, languages.html)}
        style={{ fontFamily: 'Menlo', fontSize: 20, backgroundColor: theme.colors.dark, color: theme.colors.white, borderRadius: theme.radii[2] }}
      />
      <iframe
        title="code preview"
        frameBorder={0}
        src={`data:text/html,${encodeURIComponent(content)}`}
      />
    </Grid>
  )
}

export default Editor
