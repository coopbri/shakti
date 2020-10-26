/**
 * Margin interface for base HTML tag props.
 * @param m {number|string} margin
 * @param mx {number|string} margin along x-axis
 * @param my {number|string} margin along y-axis
 * @param mt {number|string} top margin
 * @param mr {number|string} right margin
 * @param mb {number|string} bottom margin
 * @param ml {number|string} left margin
 */
export interface IMarginProps {
  m?: number | string;
  mx?: number | string;
  my?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
}

/**
 * Padding interface for base HTML tag props.
 * @param p {number|string} padding
 * @param px {number|string} padding along x-axis
 * @param py {number|string} padding along y-axis
 * @param pt {number|string} top padding
 * @param pr {number|string} right padding
 * @param pb {number|string} bottom padding
 * @param pl {number|string} left padding
 */
export interface IPaddingProps {
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
}

/**
 * Interface for flex-enabled `div`.
 * @param flexRow {boolean} set flex direction to row
 * @param flexCol {boolean} set flex direction to column
 * @param flexRowReverse {boolean} set flex direction to row-reverse
 * @param flexColReverse {boolean} set flex direction to column-reverse
 * @param alignStart {boolean} align items to flex-start
 * @param alignEnd {boolean} align-items to flex-end
 * @param alignCenter {boolean} align items to center
 * @param alignBaseline {boolean} align items to baseline
 * @param justifyStart {boolean} justify content to flex-start
 * @param justifyEnd {boolean} justify content to flex-end
 * @param justifyCenter {boolean} justify content to center
 * @param justifyBaseline {boolean} justify content to baseline
 */
export interface IFlexProps {
  flexRow?: boolean;
  flexCol?: boolean;
  flexRowReverse?: boolean;
  flexColReverse?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  alignCenter?: boolean;
  alignBaseline?: boolean;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  justifyCenter?: boolean;
  justifyBaseline?: boolean;
  justifySpaceAround?: boolean;
  justifySpaceBetween?: boolean;
}

/**
 * Interface for grid column.
 * @param size {number} relative width percentage of row (optional, defaults to 1)
 * @param hide {string} media breakpoint to hide column at (optional)
 */
export interface IColProps {
  size?: number;
  hide?: string;
}

/**
 * Interface for core color props.
 * @param color {string} color
 * @param bgColor {string} background color
 */
export interface IColorProps {
  color?: string;
  bgColor?: string;
}

/**
 * Interface for core text props.
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
export interface IBaseProps extends IMarginProps, IPaddingProps, IColorProps {}

/**
 * Base interface for HTML tag props that use text decoration, such as `p` tags.
 */
export interface ITextBaseProps extends IBaseProps, ITextProps {}
