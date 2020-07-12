import * as React from "react";
import * as atoms from "../../atoms";
import * as templates from "../../templates";

export const PageAtoms = () => {
  return (
    <templates.Column padding={[0, 2]}>
      <atoms.Divider>Divider text</atoms.Divider>
      <atoms.Divider>Button</atoms.Divider>
      <templates.Row>
        <atoms.Button size="small">Button small</atoms.Button>
        <atoms.Button>Button middle</atoms.Button>
        <atoms.Button size="large">Button large</atoms.Button>
      </templates.Row>
    </templates.Column>
  );
};
