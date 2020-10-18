import { css } from "styled-components";

/**
 * Margin (pixels)
 */
const margin = css<{ m?: number }>`
  margin: ${(props) => props.m}px;
`;

/**
 * Margin along x-axis (left and right)
 */
const marginX = css<{ mx?: number }>`
  margin: 0 ${(props) => props.mx}px;
`;

/**
 * Margin along y-axis (top and bottom)
 */
const marginY = css<{ my?: number }>`
  margin: ${(props) => props.my}px 0;
`;

/**
 * Padding (pixels)
 */
const padding = css<{ p?: number }>`
  padding: ${(props) => props.p}px;
`;

/**
 * Padding along x-axis (left and right)
 */
const paddingX = css<{ px?: number }>`
  padding: 0 ${(props) => props.px}px;
`;

/**
 * Padding along y-axis (top and bottom)
 */
const paddingY = css<{ py?: number }>`
  padding: ${(props) => props.py}px 0;
`;

/**
 * Base CSS styles
 */
export const baseStyles = css`
  ${margin}
  ${marginX}
  ${marginY}
  ${padding}
  ${paddingX}
  ${paddingY}
`;
