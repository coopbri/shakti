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
  margin: ${(props) => props.m}px;
  margin: 0 ${(props) => props.mx}px;
  margin: ${(props) => props.my}px 0;
  margin-top: ${(props) => props.mt}px;
  margin-right: ${(props) => props.mr}px;
  margin-bottom: ${(props) => props.mb}px;
  margin-left: ${(props) => props.ml}px;
`;

/**
 * Padding (pixels)
 */
const padding = css<IPaddingProps>`
  padding: ${(props) => props.p}px;
  padding: 0 ${(props) => props.px}px;
  padding: ${(props) => props.py}px 0;
  padding-top: ${(props) => props.pt}px;
  padding-right: ${(props) => props.pr}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
`;

/**
 * Text
 */
const text = css<ITextProps>`
  font-weight: ${(props) => props.bold && "bold"};
  font-weight: ${(props) => props.fw};
  font-style: ${(props) => props.italic && "italic"};
`;

/**
 * Color
 */
const color = css<IColorProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
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
