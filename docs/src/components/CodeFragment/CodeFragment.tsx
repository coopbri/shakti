import React from "react";
import styled from "styled-components";

const CodeFragment = (props: any) => {
  return <Fragment {...props} />;
};

const Fragment = styled.code`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.backgroundAccent};
  padding: 2px 4px;
  border-radius: 5px;
  display: inline;
`;

export default CodeFragment;
