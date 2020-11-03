// CSS mixins. These should never be exposed to the public API.

import { css } from "styled-components";

import checkType from "../lib/util/checkType";
import {
  BorderProps,
  ColorProps,
  DimensionProps,
  DisplayProps,
  MarginProps,
  PaddingProps,
  TextAlignProps,
  TextProps,
} from "../lib/types";

/**
 * Display
 * important is set to force override existing default (e.g. display: flex)
 */
const display = css<DisplayProps>`
  display: ${({ shown }) => shown && "block !important"};
  display: ${({ hidden }) => hidden && "none !important"};
`;

/**
 * Dimension
 */
const dimension = css<DimensionProps>`
  min-width: ${({ minWidth }) => checkType(minWidth)};
  width: ${({ width }) => checkType(width)};
  max-width: ${({ maxWidth }) => checkType(maxWidth)};
  min-height: ${({ minHeight }) => checkType(minHeight)};
  height: ${({ height }) => checkType(height)};
  max-height: ${({ maxHeight }) => checkType(maxHeight)};
`;

/**
 * Text alignment
 */
const textAlign = css<TextAlignProps>`
  text-align: ${({ textLeft }) => textLeft && "left"};
  text-align: ${({ textCenter }) => textCenter && "center"};
  text-align: ${({ textRight }) => textRight && "right"};
  text-align: ${({ textJustify }) => textJustify && "justify"};
`;

/**
 * Margin (pixels)
 */
const margin = css<MarginProps>`
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
const padding = css<PaddingProps>`
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
const text = css<TextProps>`
  font-size: ${({ size }) => checkType(size)};
  font-weight: ${({ bold }) => bold && "bold"};
  font-weight: ${({ weight }) => checkType(weight, false)};
  font-style: ${({ italic }) => italic && "italic"};
`;

/**
 * Color
 */
/* eslint-disable @typescript-eslint/no-shadow */
const color = css<ColorProps>`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;

/**
 * Border
 */
const border = css<BorderProps>`
  border: ${({ border }) => border};
  border-width: ${({ borderWidth }) => checkType(borderWidth)};
  border-style: ${({ borderStyle }) => borderStyle};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => checkType(borderRadius)};
  border-top: ${({ borderTop }) => checkType(borderTop)};
  border-right: ${({ borderRight }) => checkType(borderRight)};
  border-bottom: ${({ borderBottom }) => checkType(borderBottom)};
  border-left: ${({ borderLeft }) => checkType(borderLeft)};
`;

/**
 * Base CSS styles
 */
export const baseStyles = css`
  ${display}
  ${dimension}
  ${margin}
  ${padding}
  ${color}
  ${border}
  ${textAlign}
`;

/**
 * Base text styles
 */
export const textStyles = css`
  ${text}
`;
