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
  ShortcutTextProps,
  ShortcutTextAlignProps,
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
 * Text
 */
const TEXT = css<TextProps>`
  font-size: ${({ fontSize }) => checkType(fontSize)};
  font-weight: ${({ fontWeight }) => checkType(fontWeight, false)};
  font-weight: ${({ bold }) => bold && "bold"};
  font-style: ${({ italic }) => italic && "italic"};
  text-decoration: ${({ underline }) => underline && "underline"};
  text-decoration: ${({ overline }) => overline && "overline"};
  text-decoration: ${({ strikethrough }) => strikethrough && "line-through"};
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
 * Text (shortcut)
 */
const SHORTCUT_TEXT = css<ShortcutTextProps>`
  font-size: ${({ size }) => checkType(size)};
  font-weight: ${({ weight }) => checkType(weight, false)};
  font-weight: ${({ b }) => b && "bold"};
  font-style: ${({ i }) => i && "italic"};
  text-decoration: ${({ u }) => u && "underline"};
  text-decoration: ${({ o }) => o && "overline"};
  text-decoration: ${({ s }) => s && "line-through"};
`;

/**
 * Text alignment (shortcut)
 */
const SHORTCUT_TEXT_ALIGN = css<ShortcutTextAlignProps>`
  text-align: ${({ start }) => start && "start"};
  text-align: ${({ end }) => end && "end"};
  text-align: ${({ left }) => left && "left"};
  text-align: ${({ center }) => center && "center"};
  text-align: ${({ right }) => right && "right"};
  text-align: ${({ justify }) => justify && "justify"};
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
  ${TEXT}
  ${TEXT_ALIGN}
  ${TEXT_TRANSFORM}
`;

/**
 * Shortcut text styles
 */
export const shortcutTextStyles = css`
  ${SHORTCUT_TEXT}
  ${SHORTCUT_TEXT_ALIGN}
`;
