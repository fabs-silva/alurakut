import styled from 'styled-components';

import { ProfileArea } from '../src/components/Areas/ProfileArea';
import { WelcomeArea } from '../src/components/Areas/WelcomeArea';
import { ProfileRelationsArea } from '../src/components/Areas/ProfileRelationsArea';
import { Box } from '../src/components/Box';

const Container = styled.main`
  display: grid;
  grid-gap: 0.5rem;
  padding: 1rem;

  @media(min-width: 1024px){
    grid-template-areas: "profileArea  welcomeArea  profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default function Home() {
  const githubUser = 'fabs-silva';
  
  return (
    <Container>
      <ProfileArea githubUser={githubUser} />
      <WelcomeArea />
      <ProfileRelationsArea />
    </Container>
  )
}
