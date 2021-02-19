import React from "react";
import { Container, Text, Input, Button } from "./styles/opt-form";

const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Input = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};

OptForm.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default OptForm;
