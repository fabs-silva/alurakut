import { createContext, useState, useEffect, useContext } from 'react';

const CommunitiesContext = createContext({});

export function CommunitiesProvider({ children }) {
  const [communities, setCommunities] = useState([]);

  function createCommunity(community) {
    setCommunities([
      ...communities,
      community
    ]);
  }

  return (
    <CommunitiesContext.Provider
      value={{ communities, createCommunity }}
    >
      {children}
    </CommunitiesContext.Provider>
  )
}

export function useCommunities() {
  const context = useContext(CommunitiesContext);

  return context;
}