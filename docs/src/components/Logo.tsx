import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/**
 * Shakti logo
 */
const Logo = () => {
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

  useEffect(() => {
    console.log("Logo rendered");
  }, []);

  return <Img fluid={data.logo.childImageSharp.fluid} />;
};

export default Logo;
