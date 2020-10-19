import styled from "styled-components";

import { baseStyles } from "../../constants";

/**
 * Interface for base HTML tag props.
 * @param m {number} margin
 * @param mx {number} margin along x-axis
 * @param my {number} margin along y-axis
 * @param mt {number} top margin
 * @param mr {number} right margin
 * @param mb {number} bottom margin
 * @param ml {number} left margin
 * @param p {number} padding
 * @param px {number} padding along x-axis
 * @param py {number} padding along y-axis
 * @param pt {number} top padding
 * @param pr {number} right padding
 * @param pb {number} bottom padding
 * @param pl {number} left padding
 */
export interface IProps {
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

/**
 * Base div tag for composition of higher-order layout components.
 */
export const BaseDiv = styled.div<IProps>`
  ${baseStyles}
`;

/**
 * Base p tag for composition of higher-order text components.
 */
export const BaseP = styled.p<IProps>`
  ${baseStyles}
`;
