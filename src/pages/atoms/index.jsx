import * as React from "react";
import * as atoms from "../../atoms";

export const PageAtoms = () => {
  return (
    <atoms.Column padding={[0, 2]}>
      <atoms.Divider>Divider text</atoms.Divider>
      <atoms.Divider>Button</atoms.Divider>
      <atoms.Row>
        <atoms.Button size="small">Button small</atoms.Button>
        <atoms.Button>Button middle</atoms.Button>
        <atoms.Button size="large">Button large</atoms.Button>
      </atoms.Row>
    </atoms.Column>
  );
};
