import { createContext } from 'react'
import darkTheme from '#design/public-tokens.css'
import { CSSReset } from '#components/css-reset/css-reset'
import { StrictMode } from 'react'

type Theme = { name: string; vars: typeof darkTheme }

const ThemeContext = createContext<Theme | undefined>(undefined)

type Props = { children: React.ReactNode }
const UIBlockProvider = ({ children }: Props) => {
  return (
    <StrictMode>
      <CSSReset />
      <ThemeContext.Provider value={{ name: 'dark', vars: darkTheme }}>{children}</ThemeContext.Provider>
    </StrictMode>
  )
}

export default UIBlockProvider
