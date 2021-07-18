import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media(min-width: 1024px){
    grid-area: profileRelationsArea;
  }

  a {
    color: #000;

    span{
      color: var(--link);
    }
  }


`;