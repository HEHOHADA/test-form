import styled, { css } from 'styled-components'
import { WithTheme } from 'ui/theme'
import { ButtonProps, heightSizeMap, paddingSizeMap } from './Button'

export const ButtonContentWrapper = styled.span`
  display: flex;
  align-items: center;
  overflow: hidden;
`
export const boxShadow = (shadow: number, alpha = 0.08) =>
  css`0 ${shadow}px ${shadow * 2}px rgba(44, 39, 56, ${alpha})`

export const ButtonStyled = styled.button((props: ButtonProps & WithTheme) => {
  const {
    theme,
    color = 'main',
    textColor = 'white',
    width = 'auto',
    height,
    size = 'large',
  } = props
  const backgroundColor = theme.colors[color] || color
  const disabledBackgroundColor = theme.colors.grey
  const disabledTextColor = theme.colors.dark
  const activeBorderColor = theme.colors.dark

  const hoverStyles = css`
    box-shadow: ${boxShadow(12)}, ${boxShadow(24, 0.16)};
  `

  return css`
    box-shadow: ${boxShadow(2)}, ${boxShadow(12)};
    border-radius: 6px;
    overflow: hidden;
    border: none;
    width: ${typeof width === 'string' ? width : `${width}px`};
    height: ${height
      ? height === 'auto'
        ? height
        : `${height}px`
      : heightSizeMap[size]};

    padding: ${paddingSizeMap[size]};
    color: ${theme.colors[textColor] || textColor};
    background-color: ${backgroundColor};
    font-size: ${theme.fonts[size]};
    position: relative;
    display: inline-flex;
    align-items: center;

    &:hover {
      ${hoverStyles}
    }

    &:disabled,
    &[disabled] {
      cursor: not-allowed;
      background-color: ${disabledBackgroundColor};
      color: ${disabledTextColor};
    }

    &:hover:active {
      border: 1px solid ${activeBorderColor};
      box-shadow: ${boxShadow(4)};
    }
  `
})
