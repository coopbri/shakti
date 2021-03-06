import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import { Text } from "shakti-lib";

import { Divider } from "../";

const NavMenu = ({ location }) => {
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

      <Divider my={8} />

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
      <NavEntry>
        <NavLink to="/button" location={location}>
          Button
        </NavLink>
      </NavEntry>
      <NavEntry>
        <NavLink to="/prefabs" location={location}>
          Prefabs
        </NavLink>
      </NavEntry>

      <Divider my={8} />

      <NavEntry>
        <NavLink to="/media" location={location}>
          Media
        </NavLink>
      </NavEntry>

      <Divider my={8} />

      <NavEntry>
        <NavLink to="/recipes" location={location}>
          Recipes
        </NavLink>
      </NavEntry>
      <NavEntry>
        <NavLink to="/sandbox" location={location}>
          Sandbox
        </NavLink>
      </NavEntry>

      <Divider my={8} />

      <NavEntry>
        <ExternalLink
          href="https://www.github.com/coopbri/shakti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon size="24px" />
        </ExternalLink>
      </NavEntry>
    </NavList>
  );
};

const NavList = styled.ul`
  /* browser reset */
  list-style: none;
  padding-left: 0;
  margin-bottom: 5px;

  align-items: center;
`;

const NavEntry = styled.li`
  padding: 10px;
  text-align: center;
`;

const NavLink = styled(Link)<{ location: any }>`
  text-transform: uppercase;
  color: ${({ to, location, theme }) =>
    to === location.pathname ? theme.colors.red : theme.colors.text};
`;

const ExternalLink = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;

export default NavMenu;
