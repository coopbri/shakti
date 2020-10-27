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
    <Button onClick={onClick} viewBox="0 0 100 80" width="40" height="30">
      <rect width="100" height="12" rx="8" fill="white"></rect>
      <rect y="30" width="100" height="12" rx="8" fill="white"></rect>
      <rect y="60" width="100" height="12" rx="8" fill="white"></rect>
    </Button>
  );
};

const Button = styled.svg`
  &:hover {
    cursor: pointer;
  }
`;

export default MenuButton;
