import { ButtonHTMLAttributes, FC } from 'react'
import { Colors } from 'ui/theme'
import { ButtonContentWrapper, ButtonStyled } from './ButtonStyled'

export type Size = 'small' | 'medium' | 'large'

export type ButtonSizeMap = Record<Size, string>

export const paddingSizeMap: ButtonSizeMap = {
  small: '3px 16px',
  medium: '4px 16px',
  large: '8px 16px',
}

export const heightSizeMap: ButtonSizeMap = {
  small: '52px',
  medium: '52px',
  large: '52px',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size
  width?: 'auto' | string | number
  height?: 'auto' | number
  color?: Colors
  text?: string
  textColor?: Colors
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, text, ...other } = props

  return (
    <ButtonStyled {...other}>
      {children || <ButtonContentWrapper>{text}</ButtonContentWrapper>}
    </ButtonStyled>
  )
}
