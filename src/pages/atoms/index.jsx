import * as React from "react";
import * as atoms from "../../atoms";
import * as crumbs from "../../atoms/bread-crumbs";

export const PageAtoms = () => {
  return (
    <atoms.Column padding={[0, 2]}>
      <atoms.Divider>Typography</atoms.Divider>
      <atoms.Divider>Button</atoms.Divider>
      <atoms.Row>
        <atoms.Button size="small">Button small</atoms.Button>
        <atoms.Button>Button middle</atoms.Button>
        <atoms.Button size="large">Button large</atoms.Button>
      </atoms.Row>
      <atoms.Row>
        <atoms.Button color="primary">Button</atoms.Button>
        <atoms.Button color="secondary">Button</atoms.Button>
        <atoms.Button color="error">Button</atoms.Button>
        <atoms.Button color="warn">Button</atoms.Button>
        <atoms.Button size="large" color="secondary">
          Button large
        </atoms.Button>
      </atoms.Row>
      <atoms.Divider>Bread crumbs</atoms.Divider>
      <atoms.Row>
        <crumbs.Crumb>Item 1</crumbs.Crumb>
        <crumbs.Seperator />
        <crumbs.Crumb>Item 2</crumbs.Crumb>
        <crumbs.Seperator />
        <crumbs.Crumb>Item 3</crumbs.Crumb>
        <crumbs.Seperator />
        <crumbs.Crumb>Item 4</crumbs.Crumb>
        <crumbs.Seperator />
        <crumbs.Crumb>Item 5</crumbs.Crumb>
      </atoms.Row>
    </atoms.Column>
  );
};
