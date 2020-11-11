import React from "react";
import { Text, Card } from "shakti-lib";

import { theme } from "../../constants";

const Alert = ({ children }) => {
  return (
    <Card bgColor={theme.colors.red}>
      <Text color="white" m={0}>
        {children}
      </Text>
    </Card>
  );
};

export default Alert;
