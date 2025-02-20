import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`

    *,
    * *::before,
    * *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {

        margin: 0;
        font-family: 'Montserrat','Tinos', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
         background-color: ${theme.colors.lightTheme.background};
        line-height: 1.2;
        
        min-width: 414px;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: unset;
    }
    
   
`