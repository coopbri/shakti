import styled from "styled-components";

import { baseStyles } from "../../constants";

/**
 * Base div for composition of higher-order layout components.
 * @param m {number} margin
 * @param p {number} padding
 */
export const BaseDiv = styled.div<{ m?: number; p?: number }>`
  ${baseStyles}
`;
