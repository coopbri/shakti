// Base HTML tags augmented with CSS mixins.
// These should never be exposed directly to the public API, only composed upon.

import styled from "styled-components";

import { baseStyles, textStyles } from "../../constants";
import { IBaseProps, ITextBaseProps } from "../../lib/types";

/**
 * Base `div` tag for composition of higher-order layout components.
 */
export const BaseDiv = styled.div<IBaseProps>`
  ${baseStyles}
`;

/**
 * Base `p` tag for composition of higher-order text components.
 */
export const BaseP = styled.p<ITextBaseProps>`
  ${baseStyles}
  ${textStyles}
`;
