import { createGlobalStyle, css, ThemeProps } from "styled-components";

import { ITheme } from "../constants/theme";

/**
 * Reset to clear browser CSS defaults, merged into global styles
 */
const cssReset = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`;

/**
 * Global CSS styles
 */
const GlobalStyle = createGlobalStyle`
  ${cssReset}

  body {
    background-color: ${({ theme }: ThemeProps<ITheme>) =>
      theme.colors.background};
    color: ${({ theme }: ThemeProps<ITheme>) => theme.colors.text};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 10px 0;
  }

  a {
    color: ${({ theme }) => theme.colors.red};
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export default GlobalStyle;
