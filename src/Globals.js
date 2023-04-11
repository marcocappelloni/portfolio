import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    border: 0;
    ${"" /* font-family: 'Montserrat', sans-serif; */}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${
      "" /* background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white}; */
    }
    text-align: center;
  }

  a {
    text-decoration: none;
    ${"" /* color: ${({ theme }) => theme.colors.white};; */}
  }

  h1 {
    margin: 0;
  }
`;

export default GlobalStyles;
