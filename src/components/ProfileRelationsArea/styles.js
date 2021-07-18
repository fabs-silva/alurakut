import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media(min-width: 860px){
    grid-area: profileRelationsArea;
  }
  ul{
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 220px;
    list-style: none;
    img{
      object-fit: cover;
      background-position: center center;
      width: 100%;
      height: 100%;
      position: relative;
    }
    li a {
      display: inline-block;
      height: 102px;
      position: relative;
      overflow: hidden;
      border-radius: 0.5rem;
      img{
        border-radius: 0.5rem;
      }
      
      span{
        color: var(--box-background);
        position: absolute;
        left: 0;
        bottom: 10px;
        z-index: 2;
        padding: 0 0.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        display: --webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        background-image: linear-gradient(0deg, #00000073, transparent);
      }
    }
  }
  h4 {
    margin-bottom: 1rem;
  
  a {
    font-weight: 600;
    color: #000;
    
    span{
      color: var(--link);
    }
  }
}
`;