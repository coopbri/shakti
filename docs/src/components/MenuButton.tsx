import React, { ReactSVG } from "react";
import styled from "styled-components";

interface IProps {
  onClick?: any;
}

/**
 * Menu icon for navigation
 */
const MenuButton = ({ onClick }: IProps) => {
  return (
    <Button onClick={onClick} viewBox="0 0 100 80" width="40" height="36">
      <rect y="6" width="90" height="12" rx="8" fill="black"></rect>
      <rect y="36" width="90" height="12" rx="8" fill="black"></rect>
      <rect y="66" width="90" height="12" rx="8" fill="black"></rect>
    </Button>
  );
};

const Button = styled.svg`
  &:hover {
    cursor: pointer;
  }
`;

export default MenuButton;
