import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/nightOwl";
import { View } from "shakti-lib";

/**
 * Code block for rendering from MDX source
 * @param children code to be lexed
 */
const CodeBlock = ({ children }) => {
  const className = children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);

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
