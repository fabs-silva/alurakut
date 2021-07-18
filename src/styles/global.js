import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --box-background: #fff;
    --orkut-blue: #d4dcef;
    --orkut-pink: #e95b95;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --header-background: #5c9ecf;
    --highlight-button: #6f92bb;
    --link: #2e7bb4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%; //15px
    }

    @media(max-width: 720px){
      font-size: 87.5%; //14px
    }
  }

  body {
    background-color: var(--orkut-blue);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: Tahoma, sans-serif;
    font-weight: 400;
  }

  h2, h3 {
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  h4{
    font-weight: 600;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`