import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;

    --gray-100: #e1e1e6;
    --gray-200: #a8a8b3;
    --gray-500: #333333;
    --gray-900: #121214;
    
    --cyan-500: #61dafd;
    --yellow-500: #eba417;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;