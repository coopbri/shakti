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
  ShadowProps,
  TextAlignProps,
  TextProps,
  TextTransformProps,
} from "../lib/types";

/**
 * Display
 * important is set to force override existing default (e.g. display: flex)
 */
const DISPLAY = css<DisplayProps>`
  display: ${({ shown }) => shown && "block !important"};
  display: ${({ hidden }) => hidden && "none !important"};
`;

/**
 * Dimension
 */
const DIMENSION = css<DimensionProps>`
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
const TEXT_ALIGN = css<TextAlignProps>`
  text-align: ${({ textStart }) => textStart && "start"};
  text-align: ${({ textEnd }) => textEnd && "end"};
  text-align: ${({ textLeft }) => textLeft && "left"};
  text-align: ${({ textCenter }) => textCenter && "center"};
  text-align: ${({ textRight }) => textRight && "right"};
  text-align: ${({ textJustify }) => textJustify && "justify"};
`;

/**
 * Text transformation
 */
const TEXT_TRANSFORM = css<TextTransformProps>`
  text-transform: ${({ textTransform }) => textTransform};
  text-transform: ${({ tt }) => tt};
  text-transform: ${({ uppercase }) => uppercase && "uppercase"};
  text-transform: ${({ lowercase }) => lowercase && "lowercase"};
  text-transform: ${({ capitalize }) => capitalize && "capitalize"};
`;

/**
 * Margin (pixels)
 */
const MARGIN = css<MarginProps>`
  margin: ${({ margin }) => checkType(margin)};
  margin: 0 ${({ marginX }) => (marginX ? checkType(marginX) : "px")};
  margin: ${({ marginY }) => (marginY ? checkType(marginY) : "px")} 0;
  margin-top: ${({ marginTop }) => checkType(marginTop)};
  margin-right: ${({ marginRight }) => checkType(marginRight)};
  margin-bottom: ${({ marginBottom }) => checkType(marginBottom)};
  margin-left: ${({ marginLeft }) => checkType(marginLeft)};
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
const PADDING = css<PaddingProps>`
  padding: ${({ padding }) => checkType(padding)};
  padding: 0 ${({ paddingX }) => (paddingX ? checkType(paddingX) : "px")};
  padding: ${({ paddingY }) => (paddingY ? checkType(paddingY) : "px")} 0;
  padding-top: ${({ paddingTop }) => checkType(paddingTop)};
  padding-right: ${({ paddingRight }) => checkType(paddingRight)};
  padding-bottom: ${({ paddingBottom }) => checkType(paddingBottom)};
  padding-left: ${({ paddingLeft }) => checkType(paddingLeft)};
  padding: ${({ p }) => checkType(p)};
  padding: 0 ${({ px }) => (px ? checkType(px) : "px")};
  padding: ${({ py }) => (py ? checkType(py) : "px")} 0;
  padding-top: ${({ pt }) => checkType(pt)};
  padding-right: ${({ pr }) => checkType(pr)};
  padding-bottom: ${({ pb }) => checkType(pb)};
  padding-left: ${({ pl }) => checkType(pl)};
`;

/**
 * Text
 */
const TEXT = css<TextProps>`
  font-size: ${({ size }) => checkType(size)};
  font-weight: ${({ bold }) => bold && "bold"};
  font-weight: ${({ weight }) => checkType(weight, false)};
  font-style: ${({ italic }) => italic && "italic"};
`;

/**
 * Color
 */
/* eslint-disable @typescript-eslint/no-shadow */
const COLOR = css<ColorProps>`
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-color: ${({ bgColor }) => bgColor};
`;

/**
 * Border
 */
const BORDER = css<BorderProps>`
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
 * Shadow
 */
const SHADOW = css<ShadowProps>`
  box-shadow: ${({ boxShadow }) => boxShadow};
  text-shadow: ${({ textShadow }) => textShadow};
`;

/**
 * Base CSS styles
 */
export const baseStyles = css`
  ${DISPLAY}
  ${DIMENSION}
  ${MARGIN}
  ${PADDING}
  ${COLOR}
  ${BORDER}
  ${SHADOW}
  ${TEXT_ALIGN}
  ${TEXT_TRANSFORM}
`;

/**
 * Base text styles
 */
export const textStyles = css`
  ${TEXT}
`;
