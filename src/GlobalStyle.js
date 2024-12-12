import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
box-sizing: border-box;
}

*, ::before, ::after {
box-sizing: inherit;
}

body{
background-color: ${({ theme }) => theme.colors.background};
font-family: ${({ theme }) => theme.fonts.textMainFont};
min-height: 100vh;
display: flex;
flex-direction: column;
}
`;
