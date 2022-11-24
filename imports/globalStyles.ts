import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink-color: #d53f8c;
    --blue-color: #3282ce;
    --dark-blue-color: #30558c;
    --text-color: #212630;
    --white-color: #fff;
    --gray-color: #e0e0e0;
    --gray-light-color: #efefef;
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
    margin: 0;
    line-height: 1.6;
  }
`;
