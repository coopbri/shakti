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
 * Top margin
 */
const marginTop = css<{ mt?: number }>`
  margin-top: ${(props) => props.mt}px;
`;

/**
 * Right margin
 */
const marginRight = css<{ mr?: number }>`
  margin-right: ${(props) => props.mr}px;
`;

/**
 * Bottom margin
 */
const marginBottom = css<{ mb?: number }>`
  margin-bottom: ${(props) => props.mb}px;
`;

/**
 * Left margin
 */
const marginLeft = css<{ ml?: number }>`
  margin-left: ${(props) => props.ml}px;
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
 * Top padding
 */
const paddingTop = css<{ pt?: number }>`
  padding-top: ${(props) => props.pt}px;
`;

/**
 * Right padding
 */
const paddingRight = css<{ pr?: number }>`
  padding-right: ${(props) => props.pr}px;
`;

/**
 * Bottom padding
 */
const paddingBottom = css<{ pb?: number }>`
  padding-bottom: ${(props) => props.pb}px;
`;

/**
 * Left padding
 */
const paddingLeft = css<{ pl?: number }>`
  padding-left: ${(props) => props.pl}px;
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
  ${marginTop}
  ${marginRight}
  ${marginBottom}
  ${marginLeft}
  ${paddingTop}
  ${paddingRight}
  ${paddingBottom}
  ${paddingLeft}
`;
