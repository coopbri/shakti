import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { mdx } from "@mdx-js/react";
import prismTheme from "prism-react-renderer/themes/nightOwl";
import {
  Grid,
  Row,
  Col,
  View,
  Flex,
  Text,
  Button,
  breakpoints,
  useWindowQuery,
} from "shakti-lib";
import styled from "styled-components";

interface Props {
  children?: any;
}

// components allowed in code blocks (can be used without import)
const scope = {
  mdx,
  Grid,
  Row,
  Col,
  View,
  Flex,
  Text,
  Button,
  breakpoints,
  useWindowQuery,
};

/**
 * Code block for rendering from MDX source
 * @param children code to be lexed
 */
const CodeBlock = ({ children }: Props) => {
  const className = children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);

  // live editor (dynamic)
  if (children.props.live) {
    return (
      <LiveProvider
        code={children.props.children.trim()}
        transformCode={(code) => "/** @jsx mdx */" + code}
        scope={scope}
        theme={prismTheme}
      >
        <Editor padding={22} />
        <LivePreview />
        <LiveError style={{ overflowX: "auto", color: "red" }} />
      </LiveProvider>
    );
  }

  // rendered output (static)
  if (children.props.render) {
    return (
      <LiveProvider
        code={children.props.children.trim()}
        transformCode={(code) => "/** @jsx mdx */" + code}
        scope={scope}
        theme={prismTheme}
        noInline={true}
      >
        <LivePreview />
      </LiveProvider>
    );
  }

  // standard output: tokenized and static
  return (
    <Highlight
      // default Prism props
      {...defaultProps}
      // Prism theme
      theme={prismTheme}
      // code (from MDX source)
      code={children.props.children}
      // language (determined by Markdown code block annotation)
      language={
        // check for language match based on classname
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            ...style,
            paddingLeft: "22px",
            paddingRight: "22px",
            paddingTop: "22px",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
          {/* lex/tokenize code */}
          {tokens.map((line, i) => (
            <View {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </View>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const Editor = styled(LiveEditor)`
  border-radius: 8px;
  overflow-x: auto;

  /* unset formatting forced by react-live/react-simple-code-editor */
  & > textarea,
  pre {
    white-space: unset !important;
  }
`;

export default CodeBlock;
