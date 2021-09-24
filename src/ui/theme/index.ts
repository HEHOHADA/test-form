import { colors } from './colors'
import { fonts } from './fonts'

export interface WithIndex<T = string> {
  [key: string]: T
}

export type ColorName = keyof typeof colors
export type Colors = ColorName & WithIndex
export type Fonts = keyof typeof fonts

export interface WithTheme {
  theme: Theme
}

export interface Theme {
  colors: Colors
  fonts: Fonts & WithIndex
}

export const themeColor =
  (color: ColorName) =>
  ({ theme }: WithTheme) =>
    theme.colors[color]

export const themeFontSize =
  (font: Fonts) =>
  ({ theme }: WithTheme) =>
    theme.fonts[font]
