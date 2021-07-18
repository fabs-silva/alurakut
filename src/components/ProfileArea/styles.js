import styled from 'styled-components';

export const Container = styled.aside`
  display: none;
  gap: 0.5rem;
  
  @media(min-width: 860px){
    grid-area: profileArea;
    display: block;
  }

  img{
    border-radius: 0.5rem;
    width: 120px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a.username{
    color: var(--link);

    h3{
      font-weight: 600;
    }
  }

  hr{
    width: 100%;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    border-color: transparent;
    border-bottom-color: var(--horizontal-line);
  }
`;