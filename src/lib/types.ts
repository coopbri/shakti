// TypeScript type definitions

/**
 * Display interface for base HTML tag props.
 * @param shown {boolean} show element (display block)
 * @param hidden {boolean} hide element (display none)
 */
export interface DisplayProps {
  shown?: boolean;
  hidden?: boolean;
}

/**
 * Dimension interface for width and height.
 * @param minWidth {number|string} minimum width
 * @param width {number|string} width
 * @param maxWidth {number|string} maximum width
 * @param minHeight {number|string} minimum height
 * @param height {number|string} height
 * @param maxHeight {number|string} maximum height
 */
export interface DimensionProps {
  minWidth?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  height?: number | string;
  maxHeight?: number | string;
}

/**
 * Margin interface for base HTML tag props.
 * @param margin {number|string} margin (all cardinal directions)
 * @param marginX {number|string} margin along x-axis
 * @param marginY {number|string} margin along y-axis
 * @param marginTop {number|string} top margin
 * @param marginRight {number|string} right margin
 * @param marginBottom {number|string} bottom margin
 * @param marginLeft {number|string} left margin
 * @param m {number|string} margin (all cardinal directions)
 * @param mx {number|string} margin along x-axis
 * @param my {number|string} margin along y-axis
 * @param mt {number|string} top margin
 * @param mr {number|string} right margin
 * @param mb {number|string} bottom margin
 * @param ml {number|string} left margin
 */
export interface MarginProps {
  margin?: number | string;
  marginX?: number | string;
  marginY?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
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
 * @param padding {number|string} padding (all cardinal directions)
 * @param paddingX {number|string} padding along x-axis
 * @param paddingY {number|string} padding along y-axis
 * @param paddingTop {number|string} top padding
 * @param paddingRight {number|string} right padding
 * @param paddingBottom {number|string} bottom padding
 * @param paddingLeft {number|string} left padding
 * @param p {number|string} padding (all cardinal directions)
 * @param px {number|string} padding along x-axis
 * @param py {number|string} padding along y-axis
 * @param pt {number|string} top padding
 * @param pr {number|string} right padding
 * @param pb {number|string} bottom padding
 * @param pl {number|string} left padding
 */
export interface PaddingProps {
  padding?: number | string;
  paddingX?: number | string;
  paddingY?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
}

/**
 * Interface for text alignment.
 * @param textStart {boolean} align text to start
 * @param textEnd {boolean} align text to end
 * @param textLeft {boolean} align text to left
 * @param textCenter {boolean} align text to center
 * @param textRight {boolean} align text to right
 * @param textJustify {boolean} justify text
 */
export interface TextAlignProps {
  textStart?: boolean;
  textEnd?: boolean;
  textLeft?: boolean;
  textCenter?: boolean;
  textRight?: boolean;
  textJustify?: boolean;
}

/**
 * Interface for text transformation.
 * @param textTransform {string} text transformation
 * @param tt {string} text transformation
 * @param uppercase {boolean} uppercase text (e.g. EXAMPLE)
 * @param lowercase {boolean} lowercase text (e.g. example)
 * @param capitalize {boolean} capitalize text (e.g. Example)
 */
export interface TextTransformProps {
  textTransform?: string;
  tt?: string;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
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
 * @param justifySpaceAround {boolean} justify content with space around
 * @param justifySpaceBetween {boolean} justify content with space between
 */
export interface FlexProps {
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
 * @param size {number} relative width of column in row (defaults to 1)
 * @param showBelow {string} media breakpoint to show column at (shown at breakpoint or smaller)
 * @param showAbove {string} media breakpoint to show column at (shown at breakpoint or larger)
 * @param hideBelow {string} media breakpoint to hide column at (hidden at breakpoint or smaller)
 * @param hideAbove {string} media breakpoint to hide column at (hidden at breakpoint or larger)
 */
export interface ColProps {
  size?: number;
  showBelow?: string;
  showAbove?: string;
  hideBelow?: string;
  hideAbove?: string;
}

/**
 * Interface for core color props.
 * @param color {string} color
 * @param backgroundColor {string} background color
 * @param bgColor {string} background color
 */
export interface ColorProps {
  color?: string;
  backgroundColor?: string;
  bgColor?: string;
}

/**
 * Interface for border props.
 * @param border {string} full border specification
 * @param borderWidth {number|string} border width
 * @param borderStyle {string} border style
 * @param borderColor {string} border color
 * @param borderRadius {number|string} border radius
 * @param borderTop {number|string} top border
 * @param borderRight {number|string} right border
 * @param borderBottom {number|string} bottom border
 * @param borderLeft {number|string} left border
 */
export interface BorderProps {
  border?: string;
  borderWidth?: number | string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: number | string;
  borderTop?: number | string;
  borderRight?: number | string;
  borderBottom?: number | string;
  borderLeft?: number | string;
}

/**
 * Interface for shadow props.
 * @param boxShadow {string} box shadow
 * @param textShadow {string} text shadow
 */
export interface ShadowProps {
  boxShadow?: string;
  textShadow?: string;
}

/**
 * Interface for core text props.
 * @param fontSize {number|string} font size
 * @param fontWeight {number|string} font weight
 * @param fontBold {boolean} bold text
 * @param fontItalic {boolean} italic text
 */
export interface TextProps {
  fontSize?: number | string;
  fontWeight?: number | string;
  fontBold?: boolean;
  fontItalic?: boolean;
}

/**
 * Interface for core text (shortcut) props.
 * @param size {number|string} font size
 * @param weight {number|string} font weight
 * @param bold {boolean} bold text
 * @param italic {boolean} italic text
 */
export interface ShortcutTextProps {
  size?: number | string;
  weight?: number | string;
  bold?: boolean;
  b?: boolean;
  italic?: boolean;
  i?: boolean;
}

/**
 * Base interface for HTML tag props. Composes elementary prop interfaces, such as margin.
 */
export interface BaseProps
  extends DisplayProps,
    DimensionProps,
    MarginProps,
    PaddingProps,
    TextAlignProps,
    ColorProps,
    BorderProps {}

/**
 * Base interface for HTML tag props that use text decoration, such as `p` tags.
 */
export interface TextBaseProps extends BaseProps, TextProps {}
