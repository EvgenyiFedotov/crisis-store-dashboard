import * as React from "react";
import styled from "styled-components";
import * as templates from "../../templates";
import { useList } from "effector-react";
import * as atoms from "../../atoms";
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

  return <templates.Row step={2}>{packages}</templates.Row>;
}

function PackageCard({ size, month, status, disabled }) {
  return (
    <templates.Card.Container>
      <templates.Card.RowInfo>
        <templates.Card.TitleInfo>Size:</templates.Card.TitleInfo>
        <div>{size}</div>
      </templates.Card.RowInfo>

      <templates.Card.RowInfo>
        <templates.Card.TitleInfo>Month:</templates.Card.TitleInfo>
        <div>{month}</div>
      </templates.Card.RowInfo>

      <templates.Card.RowInfo>
        <templates.Card.TitleInfo>Status:</templates.Card.TitleInfo>
        <div>{status}</div>
      </templates.Card.RowInfo>

      <StyledCardButtons>
        <StyledDilevery type="primary" disabled={disabled}>
          Delivery
        </StyledDilevery>
      </StyledCardButtons>
    </templates.Card.Container>
  );
}

// Styled
const StyledRightContent = styled(templates.Column)`
  flex: 1;
`;

const StyledDilevery = styled(atoms.Button)`
  flex: 1;
`;

const StyledCardButtons = styled(templates.Row)`
  position: absolute;
  bottom: -12px;
  right: 12px;
`;
