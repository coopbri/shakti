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
  breakpoints,
  useWindowQuery,
} from "shakti-lib";

interface IProps {
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
  breakpoints,
  useWindowQuery,
};

/**
 * Code block for rendering from MDX source
 * @param children code to be lexed
 */
const CodeBlock = ({ children }: IProps) => {
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
        <LiveEditor />
        <LivePreview />
        <LiveError />
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
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "20px",
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

export default CodeBlock;
