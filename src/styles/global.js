import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { AlurakutStyles } from '../lib/AluraCommons';

export const GlobalStyle = createGlobalStyle`
  :root {
    --box-background: #ffffff;
    --background: #e9ebc8;
    --text-title: #b6534b;
    --text-body: #99aab5;
    --header-background: #34672c;
    --highlight-button: #84b43d;
    --link: #4f9941;
    --horizontal-line: #e9ebc8;
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
    background: url("background.jpg") center center no-repeat;
    background-size: cover;
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
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
  }

  ${AlurakutStyles}
`
