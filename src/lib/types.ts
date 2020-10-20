/**
 * Margin interface for base HTML tag props.
 * @param m {number} margin
 * @param mx {number} margin along x-axis
 * @param my {number} margin along y-axis
 * @param mt {number} top margin
 * @param mr {number} right margin
 * @param mb {number} bottom margin
 * @param ml {number} left margin
 */
export interface IMarginProps {
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}

/**
 * Padding interface for base HTML tag props.
 * @param p {number} padding
 * @param px {number} padding along x-axis
 * @param py {number} padding along y-axis
 * @param pt {number} top padding
 * @param pr {number} right padding
 * @param pb {number} bottom padding
 * @param pl {number} left padding
 */
export interface IPaddingProps {
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

/**
 * Interface for core decorative props, such as color and font weight.
 * @param bold {boolean} bold
 * @param italic {boolean} italic
 * @param fw {number|string} font-weight
 */
export interface ITextProps {
  bold?: boolean;
  italic?: boolean;
  fw?: number | string;
}

/**
 * Base interface for HTML tag props. Composes elementary prop interfaces, such as margin.
 */
export interface IBaseProps extends IMarginProps, IPaddingProps {}

/**
 * Base interface for HTML tag props that use text decoration, such as `p` tags.
 */
export interface ITextBaseProps extends IBaseProps, ITextProps {}
