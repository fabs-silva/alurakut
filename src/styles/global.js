import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { AlurakutStyles } from '../lib/AluraCommons';

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
    --horizontal-line: #ecf2fa;
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

  h1, h2, h3, h4, h5, h6{
    font-weight: 400;
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
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    max-width: 1200px;
  }

  ${AlurakutStyles}
`
