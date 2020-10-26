import React from "react";
import { Link } from "gatsby";
import { View } from "shakti";
import styled from "styled-components";

import theme from "../constants/theme";

const Navigation = () => {
  return (
    <NavList>
      <NavEntry>
        <NavLink to="/">Introduction</NavLink>
      </NavEntry>
      <NavEntry>
        <NavLink to="/getting-started">Getting Started</NavLink>
      </NavEntry>
    </NavList>
  );
};

const NavList = styled.ul`
  align-items: center;
`;

const NavEntry = styled.li`
  padding: 10px;
  text-align: center;
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;

  color: ${({ to }) =>
    to === location.pathname ? theme.colors.orange : theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export default Navigation;
