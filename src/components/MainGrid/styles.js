import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: grid;
  grid-gap: 0.5rem;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;

  @media(min-width: 860px){
    max-width: 1110px;
    grid-template-areas: "profileArea  welcomeArea  profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;