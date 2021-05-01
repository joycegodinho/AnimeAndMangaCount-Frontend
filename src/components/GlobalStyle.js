import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';  

export default createGlobalStyle `
    ${normalize}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body,
    html {
        height: 100%;
        margin: 0 px;
        color: #6b0003;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        background-color: #FFFFFF;
        line-height: 1.4;
        color: #6b0003;
        background-color: #f4d4d3;
    }

    a:link, 
    a:visited {
        color: #ca1414;
    }

    a:hover, 
    a:focus {
        color: #e9635e;
    }

    code,
    pre {
        max-width: 100%;
    }
`;