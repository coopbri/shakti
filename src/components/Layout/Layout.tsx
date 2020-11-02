// Layout components (exported to public API).

import styled from "styled-components";

import { breakpoints } from "../../constants";
import { ColProps, FlexProps } from "../../lib/types";
import { BaseDiv } from "../Base/Base";

/**
 * Construct a max-width screen media query based on a specified breakpoint.
 * Arbitrary styles can be mixed in.
 * @param styles {string} arbitrary styles to be mixed into media query
 * @param breakpoint {number} pixel breakpoint for media query max-width
 *
 * @returns {string} constructed media query with styles mixed in, if specified
 */
const constructBelowMediaQuery = (
  styles: string,
  breakpoint: number,
): string => `@media only screen and (max-width: ${breakpoint}px) {
  ${styles}
}`;

/**
 * Construct a min-width screen media query based on a specified breakpoint.
 * Arbitrary styles can be mixed in.
 * @param styles {string} arbitrary styles to be mixed into media query
 * @param breakpoint {number} pixel breakpoint for media query min-width
 *
 * @returns {string} constructed media query with styles mixed in, if specified
 */
const constructAboveMediaQuery = (
  styles: string,
  breakpoint: number,
): string => `@media only screen and (min-width: ${breakpoint}px) {
  ${styles}
}`;

// media sizes based on breakpoints (for below props)
const belowMediaSizes: {
  [key: string]: (styles: string) => string;
} = {
  xs: (styles: string) => constructBelowMediaQuery(styles, breakpoints.xs),
  sm: (styles: string) => constructBelowMediaQuery(styles, breakpoints.sm),
  md: (styles: string) => constructBelowMediaQuery(styles, breakpoints.md),
  lg: (styles: string) => constructBelowMediaQuery(styles, breakpoints.lg),
  xl: (styles: string) => constructBelowMediaQuery(styles, breakpoints.xl),
};

// media sizes based on breakpoints (for above props)
const aboveMediaSizes: {
  [key: string]: (styles: string) => string;
} = {
  xs: (styles: string) => constructAboveMediaQuery(styles, breakpoints.xs),
  sm: (styles: string) => constructAboveMediaQuery(styles, breakpoints.sm),
  md: (styles: string) => constructAboveMediaQuery(styles, breakpoints.md),
  lg: (styles: string) => constructAboveMediaQuery(styles, breakpoints.lg),
  xl: (styles: string) => constructAboveMediaQuery(styles, breakpoints.xl),
};

/**
 * Augmented div with base styles mixed in.
 */
export const View = styled(BaseDiv)``;

/**
 * Augmented, flexbox-enabled div with base styles mixed in.
 */
export const Flex = styled(BaseDiv)<FlexProps>`
  display: flex;
  flex-direction: ${({ flexRow }) => flexRow && "row"};
  flex-direction: ${({ flexCol }) => flexCol && "column"};
  flex-direction: ${({ flexRowReverse }) => flexRowReverse && "row-reverse"};
  flex-direction: ${({ flexColReverse }) => flexColReverse && "column-reverse"};
  align-items: ${({ alignStart }) => alignStart && "flex-start"};
  align-items: ${({ alignEnd }) => alignEnd && "flex-end"};
  align-items: ${({ alignCenter }) => alignCenter && "center"};
  align-items: ${({ alignBaseline }) => alignBaseline && "baseline"};
  justify-content: ${({ justifyStart }) => justifyStart && "flex-start"};
  justify-content: ${({ justifyEnd }) => justifyEnd && "flex-end"};
  justify-content: ${({ justifyCenter }) => justifyCenter && "center"};
  justify-content: ${({ justifyBaseline }) => justifyBaseline && "baseline"};
  justify-content: ${({ justifySpaceAround }) =>
    justifySpaceAround && "space-around"};
  justify-content: ${({ justifySpaceBetween }) =>
    justifySpaceBetween && "space-between"};
`;

/**
 * Container component for nesting rows and columns. Flex by default with column
 * flex direction.
 */
export const Grid = styled(Flex)`
  flex-direction: column;
`;

/**
 * Row component, nested in a grid. Flex by default.
 */
export const Row = styled(Flex)``;

/**
 * Column component, nested in a row. Flex length is set to 1 unless a length
 * is specified via the `size` prop.
 */
export const Col = styled(Flex)<ColProps>`
  flex-direction: column;
  flex: ${({ size }) => size || 1};

  ${({ showBelow }) =>
    showBelow && belowMediaSizes[showBelow](`display: block !important;`)};

  ${({ showAbove }) =>
    showAbove && aboveMediaSizes[showAbove](`display: block !important;`)};

  ${({ hideBelow }) =>
    hideBelow && belowMediaSizes[hideBelow](`display: none !important;`)};

  ${({ hideAbove }) =>
    hideAbove && aboveMediaSizes[hideAbove](`display: none !important;`)};
`;
