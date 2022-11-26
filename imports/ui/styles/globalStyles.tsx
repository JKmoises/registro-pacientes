import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink-color: #d53f8c;
    --blue-color: #3282ce;
    --red-dark-color:#C0392B;
    --red-dark-alpha-color:#C0392B80;
    --blue-dark-color: #30558c;
    --text-color: #212630;
    --white-color: #fff;
    --gray-color: #e0e0e0;
    --gray-light-color: #efefef;
    --gray-dark-color: #6e6e6e;
    --font: 'Noto Sans', sans-serif;
  }

  html {
    box-sizing: border-box;
    font-family: var(--font);
    font-size: 16px;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    color: var(--text-color);
  }

  a {
    text-decoration: none;
    transition: opacity 0.5s ease-out;
  }

  a:hover {
    opacity: 0.75;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  h3 {
    margin: 0;
    font-size: 1.25rem;
  }


  p {
    line-height: 1.6;
  }
  
`;
