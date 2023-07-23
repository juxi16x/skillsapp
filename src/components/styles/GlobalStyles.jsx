import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: white;
        font-family: Consolas;
    }

    #root {
        width: 25rem;
        height: 40rem;
        border: 0.01rem solid gray;
        border-radius: 0.5rem;
    }
`