import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media(min-width: 860px){
    grid-area: welcomeArea;
  }
`;