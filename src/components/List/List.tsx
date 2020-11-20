// List components (exported to public API).

import styled from "styled-components";

import { BaseDd, BaseDl, BaseDt, BaseLi, BaseOl, BaseUl } from "../Base/Base";

/**
 * Unordered list component.
 */
export const UnorderedList = styled(BaseUl)``;

/**
 * Ordered list component.
 */
export const OrderedList = styled(BaseOl)``;

/**
 * List item component, nested in an ordered or unordered list.
 */
export const ListItem = styled(BaseLi)``;

/**
 * Description list component.
 */
export const DescriptionList = styled(BaseDl)``;

/**
 * Description term component.
 */
export const DescriptionTerm = styled(BaseDt)``;

/**
 * Description detail component.
 */
export const DescriptionDetail = styled(BaseDd)``;
