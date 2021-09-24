import styled, { css } from 'styled-components'
import { Colors } from '../theme'
import { Size } from '../base/form/Button'

export type SvgProps = {
  viewBox?: string
  fill?: Colors | string
  width?: number
  height?: number
  size?: Size
  reverse?: boolean
}

export const sizeMap: Record<Size, number> = {
  small: 30,
  medium: 30,
  large: 30,
}

const setSize = css<{ size?: Size }>`
  ${({ size = 'medium' }) => (size in sizeMap ? `${sizeMap[size]}px` : size)}
`

export const StyledSvg = styled.svg<SvgProps>`
  fill: ${({ fill = 'white', theme }) => theme.colors[fill] || fill};
  width: ${setSize};
  height: ${setSize};
  flex-shrink: 0;

  transform: ${({ reverse }) => reverse && 'scaleX(-1)'};
`
