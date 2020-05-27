import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, #root {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;

export default GlobalStyle;