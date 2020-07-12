import * as React from "react";
import styled from "styled-components";
import * as templates from "../../templates";
import { useList } from "effector-react";
import * as atoms from "../../atoms";
import * as ri from "react-icons/ri";
import { Route } from "react-router-dom";

import * as model from "./model";

export function RightContent() {
  return (
    <StyledRightContent>
      <Route path="/main/packages" exact component={Packages} />
    </StyledRightContent>
  );
}

function Packages() {
  const packages = useList(model.$packages, (pckg) => (
    <PackageCard
      size={pckg.size}
      month={pckg.month}
      status={pckg.status}
      disabled={pckg.disabled}
    />
  ));

  return <templates.Row>{packages}</templates.Row>;
}

function PackageCard({ size, month, status, disabled }) {
  return (
    <atoms.Card.Container>
      <atoms.Card.RowInfo>
        <atoms.Card.TitleInfo>Size:</atoms.Card.TitleInfo>
        <div>{size}</div>
      </atoms.Card.RowInfo>

      <atoms.Card.RowInfo>
        <atoms.Card.TitleInfo>Month:</atoms.Card.TitleInfo>
        <div>{month}</div>
      </atoms.Card.RowInfo>

      <atoms.Card.RowInfo>
        <atoms.Card.TitleInfo>Status:</atoms.Card.TitleInfo>
        <div>{status}</div>
      </atoms.Card.RowInfo>

      <templates.Row>
        <StyledDilevery type="primary" disabled={disabled}>
          Delivery
        </StyledDilevery>

        <atoms.ButtonLink>
          <ri.RiInformationLine />
        </atoms.ButtonLink>
      </templates.Row>
    </atoms.Card.Container>
  );
}

// Styled
const StyledRightContent = styled(templates.Column)`
  flex: 1;
`;

const StyledDilevery = styled(atoms.Button)`
  flex: 1;
`;
