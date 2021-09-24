import { FC } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import { fonts } from './fonts'
import { colors } from './colors'
import { Theme } from './index'

export const defaultTheme = {
  colors,
  fonts,
} as unknown as Theme

export const ThemeProvider: FC = (props) => {
  return <StyledProvider theme={defaultTheme}>{props.children}</StyledProvider>
}
