import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import UIBlockProvider from '../src/components/provider'
import darkTheme from '../src/design/public-tokens.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview

// TODO: add proper theme values
const light = { color: 'white' }

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light,
      dark: darkTheme,
    },
    defaultTheme: 'dark',
    Provider: UIBlockProvider,
  }),
]
