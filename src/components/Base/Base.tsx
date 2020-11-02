// Base HTML tags augmented with CSS mixins.
// These should never be exposed directly to the public API, only composed upon.

import styled from "styled-components";

import { baseStyles, textStyles } from "../../constants";
import { BaseProps, TextBaseProps } from "../../lib/types";

/**
 * Base `div` tag for composition of higher-order layout components.
 */
export const BaseDiv = styled.div<BaseProps>`
  ${baseStyles}
`;

/**
 * Base `p` tag for composition of higher-order text components.
 */
export const BaseP = styled.p<TextBaseProps>`
  ${baseStyles}
  ${textStyles}
`;

/**
 * Base `button` tag for composition of higher-order button components.
 */
export const BaseButton = styled.button<BaseProps>`
  ${baseStyles}
  ${textStyles}
`;
