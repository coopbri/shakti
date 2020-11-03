import React from "react";
import { Text } from "shakti-lib";

import { Card } from "../";
import { theme } from "../../constants";

const Remark = ({ children }) => {
  return (
    <Card mb={15} color={theme.colors.purple}>
      <Text color="white">
        📌 <b>Note:</b> {children}
      </Text>
    </Card>
  );
};

export default Remark;
