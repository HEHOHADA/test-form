import styled from 'styled-components'
import { boxShadow } from '../Button/ButtonStyled'

export const Input = styled.input`
  border-radius: 6px;
  padding: 16px;
  box-shadow: ${boxShadow(4, 0.04)};
`
