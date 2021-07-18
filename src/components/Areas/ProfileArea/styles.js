import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media(min-width: 1024px){
    grid-area: profileArea;
  }

  img{
    border-radius: 0.25rem;
    width: 120px;
  }
`;