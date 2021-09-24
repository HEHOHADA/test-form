import styled, { css } from 'styled-components'
import { WithTheme } from 'ui/theme'
import { ButtonProps, heightSizeMap, paddingSizeMap } from './Button'

export const ButtonContentWrapper = styled.span`
  display: flex;
  align-items: center;
  overflow: hidden;
`

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
    box-shadow: 0 12px 24px rgba(44, 39, 56, 0.08), 0 24px 48px rgba(44, 39, 56, 0.16);
  `

  return css`
    box-shadow: 0 2px 4px rgba(44, 39, 56, 0.08), 0 4px 8px rgba(44, 39, 56, 0.08);
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
      box-shadow: 0 4px 8px rgba(44, 39, 56, 0, 08);
    }
  `
})
