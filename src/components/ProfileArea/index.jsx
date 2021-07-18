import { Box } from '../Box';
import { AlurakutProfileSidebarMenuDefault } from '../../lib/AluraCommons';

import { Container } from './styles';

export function ProfileArea({ githubUser, ...rest }) {
  const nomeUsuario = 'Fabiana Silva';

  return (
    <Container>
      <Box>
        <img src={` https://github.com/${githubUser}.png`} />
        <hr />
        <a className="username" href={`https://www.github;com/${githubUser}`}>
          <h3>{nomeUsuario}</h3>
        </a>
        <hr />
        <AlurakutProfileSidebarMenuDefault />
      </Box>
    </Container>
  )
}