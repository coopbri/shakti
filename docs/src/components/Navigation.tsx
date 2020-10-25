import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { View } from "shakti";
import styled from "styled-components";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "shakti-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <View mr={50}>
      <Img fluid={data.logo.childImageSharp.fluid} />
      <NavList>
        <NavEntry>
          <NavLink to="/">Introduction</NavLink>
        </NavEntry>
        <NavEntry>
          <NavLink to="/getting-started">Getting Started</NavLink>
        </NavEntry>
      </NavList>
    </View>
  );
};

const NavList = styled.ul`
  align-items: center;
`;

const NavEntry = styled.li`
  padding: 10px;
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.aqua};
  }
`;

export default Navigation;
