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
        width: 24rem;
        height: 40rem;
        border: 0.01rem solid gray;
        border-radius: 0.5rem;
    }

    .Link {
        color: gray;
        text-decoration: none;
        padding: 10px;
        background-color: white;
        margin: 5px;
        border-radius: 5px;
    }

    .Link:hover {
        background-color: #b9b5b5;
    }
`