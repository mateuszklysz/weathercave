import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
       margin: 0;
       padding: 0;
    }
    body {
       margin: 0;
       padding: 0;
       font-family: "Open-Sans", "Helvetica", "Sans-Serif";
    }
    body::-webkit-scrollbar {
       width: 0.5em;
    }
    
    body::-webkit-scrollbar-thumb {
       background-color: "white";
    }
    input,
    textarea,
    button,
    select,
    Link,
    AniLink,
    p,
    a {
       -webkit-tap-highlight-color: transparent;
       -webkit-user-select: none;
       user-select: none;
    }
`;

export default GlobalStyle;
