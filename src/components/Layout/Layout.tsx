// Layout components (exported to public API).

import styled from "styled-components";

import { breakpoints } from "../../constants";
import { BaseDiv } from "../Base/Base";

/**
 * Construct a max-width screen media query based on a specified breakpoint. Arbitrary styles can be mixed in.
 * @param styles {string} arbitrary styles to be mixed into media query
 * @param breakpoint {number} pixel breakpoint for media query max-width
 *
 * @returns {string} constructed media query with styles mixed in, if specified
 */
const constructMediaQuery = (
  styles: string,
  breakpoint: number,
): string => `@media only screen and (max-width: ${breakpoint}px) {
  ${styles}
}`;

// media sizes based on breakpoints
const mediaSizes: {
  [key: string]: (styles: string) => string;
} = {
  xs: (styles: string) => constructMediaQuery(styles, breakpoints.xs),
  sm: (styles: string) => constructMediaQuery(styles, breakpoints.sm),
  md: (styles: string) => constructMediaQuery(styles, breakpoints.md),
  lg: (styles: string) => constructMediaQuery(styles, breakpoints.lg),
  xl: (styles: string) => constructMediaQuery(styles, breakpoints.xl),
};

/**
 * Augmented div with base styles mixed in.
 */
export const View = styled(BaseDiv)``;

/**
 * Augmented, flexbox-enabled div with base styles mixed in.
 */
export const Flex = styled(BaseDiv)`
  display: flex;
`;

/**
 * Container component for nesting rows and columns. Flex by default with column flex direction.
 */
export const Grid = styled(BaseDiv)`
  display: flex;
  flex-direction: column;
`;

/**
 * Row component, nested in a grid. Flex by default.
 */
export const Row = styled(BaseDiv)`
  display: flex;
`;

/**
 * Column component, nested in a row. Flex length is set to 1 unless a length is specified via the `size` prop.
 * @param size {number} relative width percentage of row (optional, defaults to 1)
 * @param hide {string} media breakpoint to hide column at (optional)
 */
export const Col = styled(BaseDiv)<{
  size?: number;
  hide?: string;
}>`
  flex: ${(props) => props.size || 1};

  ${(props) => props.hide && mediaSizes[props.hide](`display: none;`)}
`;
