import { createGlobalStyle, css, ThemeProps } from "styled-components";
import "fontsource-noto-sans-jp";

import { ITheme } from "../../lib/types";

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
    font-family: "Noto Sans JP", Arial, Helvetica, sans-serif;
    font-size: 18px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 30px 0 -5px 0;
  }

  a {
    color: ${({ theme }) => theme.colors.red};
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  a.anchor {
    fill: ${({ theme }) => theme.colors.red};
    margin-right: 8px;
  }
`;

export default GlobalStyle;
