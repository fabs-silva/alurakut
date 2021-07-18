import { useCommunities } from '../../hooks/UseCommunities';

import { ProfileRelationsBox } from '../ProfileRelationsBox';

import { Container } from './styles';

export function ProfileRelationsArea() {
  const { userFollowers, communities } = useCommunities();

  return (
    <Container>
      <ProfileRelationsBox
        title="Meus amigos"
        length={userFollowers.length}
        items={userFollowers}
      />
      <ProfileRelationsBox
        title="Minhas comunidades"
        length={communities.length}
        items={communities}
      />
    </Container>
  )
}