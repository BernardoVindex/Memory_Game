import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    margin: 0;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }
  #app {
    
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
    
  }
`