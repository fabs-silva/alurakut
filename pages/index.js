import { CommunitiesProvider } from '../src/hooks/UseCommunities';

import { AlurakutMenu } from '../src/lib/AluraCommons';
import { MainGrid } from '../src/components/MainGrid';
import { ProfileArea } from '../src/components/ProfileArea';
import { WelcomeArea } from '../src/components/WelcomeArea';
import { ProfileRelationsArea } from '../src/components/ProfileRelationsArea';

export default function Home() {
  const githubUser = 'fabs-silva';
  
  return (
    <CommunitiesProvider>
      <AlurakutMenu />
      <MainGrid>
        <ProfileArea githubUser={githubUser} />
        <WelcomeArea />
        <ProfileRelationsArea />
      </MainGrid>
    </CommunitiesProvider>
  )
}
