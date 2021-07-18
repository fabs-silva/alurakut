import { Box } from '../../Box';

import { Container } from './styles';

export function ProfileRelationsArea() {
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ];

  return (
    <Container>
      <Box>
        <h4><a href="#">Meus amigos <span>({pessoasFavoritas.length})</span></a></h4>
        {pessoasFavoritas.map(pessoa => {
          return (
            <a href={`https://www.github.com/${pessoa}`} key={pessoa}>
              <img src={` https://www.github.com/${pessoa}.png`} style={{ width: '90px', borderRadius: '0.25rem' }} />
              <span>{pessoa}</span>
            </a>
          )
        })}
      </Box>
      <Box>
        <h4><a href="#">Minhas comunidades <span>(10)</span></a></h4>
      </Box>
    </Container>
  )
}