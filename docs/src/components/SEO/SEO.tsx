import React from "react";
import Helmet from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

// overloaded metadata
interface Props {
  title: string;
  description?: string;
  image?: string;
}

/**
 * SEO component for setting page metadata.
 * @param title {string}
 * @param description {string}
 * @param image {string}
 */
const SEO = ({ title, description, image }: Props) => {
  // get current path for URL metadata
  const { pathname: path } = useLocation();

  // get site metadata
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
            defaultImage
            author
            baseUrl
            locale
          }
        }
      }
    `,
  );

  // default/constant site metadata
  // default data serves as fallback in case overrides not passed in props
  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    author,
    baseUrl,
    locale,
  } = site.siteMetadata;

  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImage;

  return (
    <Helmet
      // attributes appended to `html` tag
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      // combine meta tags
      meta={[
        // general metadata
        {
          name: `description`,
          content: metaDescription,
        },
        { name: `image`, content: metaImage },
        { name: `author`, content: author },
        // Open Graph metadata
        { property: `og:url`, content: `${baseUrl}${path}` },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        { property: `og:image`, content: metaImage },
        { property: `og:locale`, content: locale },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
};

export default SEO;
