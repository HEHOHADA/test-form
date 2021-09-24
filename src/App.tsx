import styled from 'styled-components'
import { RegistrationForm } from 'ui/forms/RegistrationForm'
import { themeColor } from './ui/theme'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${themeColor('dark')};
`

export function App() {
  return (
    <Container>
      <RegistrationForm />
    </Container>
  )
}
