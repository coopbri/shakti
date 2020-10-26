// CSS mixins. These should never be exposed to the public API.

import { css } from "styled-components";

import {
  IColorProps,
  IMarginProps,
  IPaddingProps,
  ITextProps,
} from "../lib/types";

/**
 * Margin (pixels)
 */
const margin = css<IMarginProps>`
  margin: ${({ m }) => m}px;
  margin: 0 ${({ mx }) => mx}px;
  margin: ${({ my }) => my}px 0;
  margin-top: ${({ mt }) => mt}px;
  margin-right: ${({ mr }) => mr}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-left: ${({ ml }) => ml}px;
`;

/**
 * Padding (pixels)
 */
const padding = css<IPaddingProps>`
  padding: ${({ p }) => p}px;
  padding: 0 ${({ px }) => px}px;
  padding: ${({ py }) => py}px 0;
  padding-top: ${({ pt }) => pt}px;
  padding-right: ${({ pr }) => pr}px;
  padding-bottom: ${({ pb }) => pb}px;
  padding-left: ${({ pl }) => pl}px;
`;

/**
 * Text
 */
const text = css<ITextProps>`
  font-weight: ${({ bold }) => bold && "bold"};
  font-weight: ${({ fw }) => fw};
  font-style: ${({ italic }) => italic && "italic"};
`;

/**
 * Color
 */
const color = css<IColorProps>`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;

/**
 * Base CSS styles
 */
export const baseStyles = css`
  ${margin}
  ${padding}
  ${color}
`;

/**
 * Base text styles
 */
export const textStyles = css`
  ${text}
`;
