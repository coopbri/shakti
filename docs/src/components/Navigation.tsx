import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Divider from "./Divider";
import theme from "../constants/theme";

const Navigation = ({ location }) => {
  return (
    <NavList>
      <NavEntry>
        <NavLink to="/" location={location}>
          Introduction
        </NavLink>
      </NavEntry>
      <NavEntry>
        <NavLink to="/getting-started" location={location}>
          Getting Started
        </NavLink>
      </NavEntry>

      <Divider my={16} />

      <NavEntry>
        <NavLink to="/base" location={location}>
          Base
        </NavLink>
      </NavEntry>
      <NavEntry>
        <NavLink to="/layout" location={location}>
          Layout
        </NavLink>
      </NavEntry>
      <NavEntry>
        <NavLink to="/text" location={location}>
          Text
        </NavLink>
      </NavEntry>

      <Divider my={16} />
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

const NavLink = styled(Link)<{ location: any }>`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;

  color: ${({ to, location }) =>
    to === location.pathname ? theme.colors.orange : theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export default Navigation;
