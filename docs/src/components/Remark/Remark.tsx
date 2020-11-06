import React from "react";
import { Text, Card } from "shakti-lib";

import { theme } from "../../constants";

const Remark = ({ children }) => {
  return (
    <Card mb={15} bgColor={theme.colors.purple}>
      <Text color="white" m={0}>
        📌 <b>Note:</b> {children}
      </Text>
    </Card>
  );
};

export default Remark;
