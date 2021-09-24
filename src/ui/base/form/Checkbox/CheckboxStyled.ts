import styled from 'styled-components'
import { themeColor, themeFontSize } from 'ui/theme'
import { boxShadow } from '../Button/ButtonStyled'

export const LabelStyled = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  cursor: pointer;
  outline: none;
  align-items: center;
  line-height: 18px;
  font-size: ${themeFontSize('medium')};
`

export const CheckMarkStyled = styled.span`
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  border: 1px solid ${themeColor('grey')};
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 8px;

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 2px;
    width: 8px;
    height: 12px;
    border: solid ${themeColor('main')};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    left: 8px;
  }
`

export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${CheckMarkStyled} {
    border: 2px solid ${themeColor('main')};
    &:after {
      display: block;
    }
  }
  &:focus,
  &:active {
    & ~ ${CheckMarkStyled} {
      border: 2px solid ${themeColor('main')};
      box-shadow: ${boxShadow(4, 0.04)};
    }
  }
`
