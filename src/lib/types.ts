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
