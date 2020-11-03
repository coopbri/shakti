import React from "react";
import { Text } from "shakti-lib";

import { Card } from "../";
import { theme } from "../../constants";

const Alert = ({ children }) => {
  return (
    <Card color={theme.colors.red}>
      <Text color="white">{children}</Text>
    </Card>
  );
};

export default Alert;
