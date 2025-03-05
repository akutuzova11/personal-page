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
 transition: background 0.8s;
 font-family: ${({ theme }) => theme.fonts.main};
}
`;
