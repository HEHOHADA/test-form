import styled from 'styled-components'
import { themeColor, themeFontSize } from 'ui/theme'
import { Input } from '../Input/Input'

export const HintWrap = styled.span`
  display: flex;
  align-items: flex-end;
  margin-top: 2px;
`

export const Hint = styled.span<{ isInvalid: boolean }>`
  color: ${({ isInvalid }) => themeColor(isInvalid ? 'error' : 'dark')};
  position: relative;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  display: inline-block;
  font-size: ${themeFontSize('small')};
  padding-left: 16px;
  line-height: 18px;
`

export const LabelText = styled.span`
  position: absolute;
  left: 0;
  font-size: ${themeFontSize('medium')};
`

const labelMargin = 6

export const Label = styled.label<{ labelTextHeight?: number }>`
  background: ${themeColor('white')};
  margin-top: ${({ labelTextHeight = 18 }) => `${labelTextHeight + labelMargin}px`};
  padding: 1px;
  position: relative;
  height: 52px;
  display: flex;
  flex-direction: column;

  ${LabelText} {
    top: -${({ labelTextHeight = 18 }) => labelTextHeight + labelMargin}px;
    padding: 0 14px;
  }
`

export const TextFieldInput = styled(Input)<{ isInvalid?: boolean }>`
  flex-grow: 1;
  outline: 0;
  background-color: ${themeColor('white')};
  font-size: ${themeFontSize('medium')};
  padding: 0 14px;
  margin: 0 14px;
  border: 1px solid ${themeColor('grey')};

  &:focus {
    border: 2px solid ${themeColor('main')};
  }

  &::placeholder {
    color: ${themeColor('lightMain')};
    font-size: ${themeFontSize('medium')};
  }
`
