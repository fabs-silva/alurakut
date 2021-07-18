import { Box } from '../../Box';

import { Container } from './styles';

export function WelcomeArea() {
  return (
    <Container>
      <Box>
        <h2>Bem-vindo(a) Fabiana</h2>
      </Box>
      <Box>
        <h3>O que você deseja fazer hoje?</h3>
      </Box>
    </Container>
  )
}