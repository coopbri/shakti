// CSS mixins. These should never be exposed to the public API.

import { css } from "styled-components";

import checkType from "../lib/util/checkType";
import {
  IColorProps,
  IDisplayProps,
  IMarginProps,
  IPaddingProps,
  ITextProps,
} from "../lib/types";

/**
 * Display
 * important is set to force override existing default (e.g. display: flex)
 */
const display = css<IDisplayProps>`
  display: ${({ shown }) => shown && "block !important"};
  display: ${({ hidden }) => hidden && "none !important"};
`;

/**
 * Margin (pixels)
 */
const margin = css<IMarginProps>`
  margin: ${({ m }) => checkType(m)};
  margin: 0 ${({ mx }) => (mx ? checkType(mx) : "px")};
  margin: ${({ my }) => (my ? checkType(my) : "px")} 0;
  margin-top: ${({ mt }) => checkType(mt)};
  margin-right: ${({ mr }) => checkType(mr)};
  margin-bottom: ${({ mb }) => checkType(mb)};
  margin-left: ${({ ml }) => checkType(ml)};
`;

/**
 * Padding (pixels)
 */
const padding = css<IPaddingProps>`
  padding: ${({ p }) => checkType(p)};
  padding: 0 ${({ px }) => (px ? checkType(px) : "px")};
  padding: ${({ py }) => (py ? checkType(py) : "py")} 0;
  padding-top: ${({ pt }) => checkType(pt)};
  padding-right: ${({ pr }) => checkType(pr)};
  padding-bottom: ${({ pb }) => checkType(pb)};
  padding-left: ${({ pl }) => checkType(pl)};
`;

/**
 * Text
 */
const text = css<ITextProps>`
  font-weight: ${({ bold }) => bold && "bold"};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: ${({ italic }) => italic && "italic"};
`;

/**
 * Color
 */
/* eslint-disable @typescript-eslint/no-shadow */
const color = css<IColorProps>`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;

/**
 * Base CSS styles
 */
export const baseStyles = css`
  ${display}
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
