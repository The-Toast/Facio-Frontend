import '@emotion/react'

import type {theme} from 'common'

type DefaultTheme = typeof theme

declare module '@emotion/react' {
  interface Theme extends DefaultTheme {}
}