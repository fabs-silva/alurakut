import { createContext, useState, useEffect, useContext } from 'react';

import { api } from '../services/api';

const CommunitiesContext = createContext({});

export function CommunitiesProvider({ children }) {
  const [userFollowers, setUserFollowers] = useState([]);

  const user = 'fabs-silva';

  useEffect(() => {
    api.get(`${user}/followers`)
      .then(response => setUserFollowers(response.data));
  }, []);

  const [communities, setCommunities] = useState([]);

  function createCommunity(community) {
    setCommunities([
      ...communities,
      community
    ]);
  }

  return (
    <CommunitiesContext.Provider
      value={{ userFollowers, communities, createCommunity }}
    >
      {children}
    </CommunitiesContext.Provider>
  )
}

export function useCommunities() {
  const context = useContext(CommunitiesContext);

  return context;
}