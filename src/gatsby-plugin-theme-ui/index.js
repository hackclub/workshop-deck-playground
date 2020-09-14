import base from '@hackclub/theme'
// import { highlight } from '@mdx-deck/themes'
import { merge } from 'theme-ui'

const theme = merge.all(
  base,
  // highlight,
  {
    useColorSchemeMediaQuery: false,
    useLocalStorage: false,
    fonts: {
      "heading": "\"Phantom Sans\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
      "body": "\"Phantom Sans\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
      "monospace": "\"SF Mono\", \"Roboto Mono\", Menlo, Consolas, monospace"
    },
    styles: {
      Slide: {
        fontSize: [3, 4],
      },
      img: {
        objectFit: 'contain'
      },
      h1: {
        fontSize: [5, 6]
      },
      pre: {
        textAlign: 'left',
        fontSize: 'inherit'
      },
      code: {
        bg: 'sunken',
        px: 1,
        borderRadius: 'default',
        color: 'purple'
      },
      p: {
        maxWidth: 980,
        mx: 'auto',
        px: 3,
      },
      li: {
        maxWidth: 980,
        mx: 'auto',
        px: 3,
      }
    }
  }
)

export default theme
