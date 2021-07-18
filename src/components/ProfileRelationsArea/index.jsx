import { useCommunities } from '../../hooks/UseCommunities';

import { Box } from '../Box';

import { Container } from './styles';

export function ProfileRelationsArea() {
  const { communities } = useCommunities();

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
        <ul>
          {pessoasFavoritas.map(pessoa => {
            return (
              <li key={pessoa}>
                <a href={`https://www.github.com/${pessoa}`}>
                  <img src={` https://www.github.com/${pessoa}.png`} />
                  <span>{pessoa}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </Box>
      <Box>
        <h4><a href="#">Minhas comunidades <span>(10)</span></a></h4>
        <ul>
          {communities.map(community => {
            return (
              <li key={community.title}>
                <a href="/">
                  <img src={community.image} />
                  <span>{community.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </Box>
    </Container>
  )
}