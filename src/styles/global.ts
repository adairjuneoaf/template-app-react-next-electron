import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

:root{
  --white-default: #FFFFFF;
  --white-prisma: #F9F6F7;
  --gray-prisma: #313131;
  --gray-background: #121214;
  --yellow-prisma: #fea82f;
  --orange-prisma: #fe6701;
}

html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--gray-background);
    color: var(--white-prisma);
    -webkit-font-smoothing: antialiased;
    
    overflow-x: hidden;
    overflow-y: auto;

  /* &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--gray-800);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-300);
  }

  &::-webkit-scrollbar-thumb:hover {
    
  } */
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
}

p{
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
}

a{
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6, strong{
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white-default);
}

span.highlightedInfo{
  color: var(--orange-prisma);
}

button {
    cursor: pointer;
}

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}

`;
