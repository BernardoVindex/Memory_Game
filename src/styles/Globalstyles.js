import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 62.5%; 
  }
        
  *, *::before, *::after {
    box-sizing: inherit;
  }
        
  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }
  ul {
    list-style: none;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
  body {
    background-color: #fefefe;
    height: 100vh;
    margin: 0 auto;
    width: 300px;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
    border: 1px solid black;

  }
`