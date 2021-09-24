import { Form } from 'formik'
import styled from 'styled-components'
import { Button } from 'ui/base/form/Button'
import { themeColor, themeFontSize } from '../theme'
import { FieldControl } from '../base/form/FieldControl'

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  box-shadow: 0 12px 24px rgba(44, 39, 56, 0.02), 0 32px 64px rgba(44, 39, 56, 0.04);
  min-width: 360px;
  max-width: 500px;
  background: ${themeColor('white')};
  padding: 40px 16px;
  width: calc(100% - 40px);
`

export const Header = styled.h1`
  font-size: ${themeFontSize('h1')};
  color: ${themeColor('dark')};
  font-weight: bold;
  margin-bottom: 6px;
`

export const HeaderContainer = styled.div`
  display: flex;
  margin-left: 16px;
  flex-direction: column;
  margin-bottom: 58px;
`

export const LinkContainer = styled.div`
  display: flex;
  font-size: ${themeFontSize('medium')};
`

export const Text = styled.span`
  font-size: inherit;
  color: ${themeColor('dark')};
`

export const StyledLink = styled.a`
  color: ${themeColor('main')};
  text-decoration: none;
  font-size: inherit;
  margin: 0 4px;
`

export const RegisterFieldControl = styled(FieldControl)`
  margin-bottom: 34px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  margin: 40px 16px;
`

export const SubmitButton = styled(Button)`
  margin: 0 14px;
`
