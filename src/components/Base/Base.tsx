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

/**
 * Base `ul` tag.
 */
export const BaseUl = styled.ul<BaseProps>`
  ${baseStyles}
`;

/**
 * Base `ol` tag.
 */
export const BaseOl = styled.ol<BaseProps>`
  ${baseStyles}
`;

/**
 * Base `dl` tag.
 */
export const BaseDl = styled.dl<BaseProps>`
  ${baseStyles}
`;

/**
 * Base `dt` tag.
 */
export const BaseDt = styled.dt<BaseProps>`
  ${baseStyles}
`;

/**
 * Base `dd` tag.
 */
export const BaseDd = styled.dd<BaseProps>`
  ${baseStyles}
`;

/**
 * Base `li` tag.
 */
export const BaseLi = styled.li<BaseProps>`
  ${baseStyles}
`;
