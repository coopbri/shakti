import { css } from "styled-components";

/**
 * Margin (pixels)
 */
const margin = css<{ m?: number }>`
  margin: ${(props) => props.m}px;
`;

/**
 * Padding (pixels)
 */
const padding = css<{ p?: number }>`
  padding: ${(props) => props.p}px;
`;

/**
 * Base CSS styles
 */
export const baseStyles = css`
  ${margin}
  ${padding}
`;
