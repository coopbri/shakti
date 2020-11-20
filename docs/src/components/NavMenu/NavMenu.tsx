import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaGithub as GitHubIcon } from "react-icons/fa";

import { Divider } from "../";
import { navMenuItems } from "../../constants";

const NavMenu = ({ location }) => {
  return (
    <NavList>
      {navMenuItems.map((item) => (
        <>
          <NavEntry>
            <NavLink to={item[1]} location={location}>
              {item[0]}
            </NavLink>
          </NavEntry>

          {/* render divider below entry if boolean switch is true */}
          {item[2] && <Divider my={8} />}
        </>
      ))}

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
