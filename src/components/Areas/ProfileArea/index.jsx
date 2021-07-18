import { Box } from '../../Box';

import { Container } from './styles';

export function ProfileArea({ githubUser, ...rest }) {
  return (
    <Container>
      <Box>
        <img src={` https://github.com/${githubUser}.png`} />
      </Box>
    </Container>
  )
}