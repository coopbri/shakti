import React from "react";
import { Link } from "gatsby";
import { Flex } from "shakti";

const Navigation = () => {
  return (
    <>
      <Link to="/">Introduction</Link>
      <Link to="/getting-started">Getting Started</Link>
    </>
  );
};

export default Navigation;
