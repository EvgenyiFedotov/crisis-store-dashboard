import * as React from "react";
import styled from "styled-components";
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

  return (
    <atoms.Row step={2} alignItems="flex-start">
      {packages}
    </atoms.Row>
  );
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

      <PackageCardButtons disabled={disabled} />
    </atoms.Card.Container>
  );
}

function PackageCardButtons({ disabled }) {
  if (disabled) {
    return null;
  }

  return (
    <atoms.Card.Buttons>
      <StyledDilevery color="primary" disabled={disabled}>
        Delivery
      </StyledDilevery>
    </atoms.Card.Buttons>
  );
}

// Styled
const StyledRightContent = styled(atoms.Column)`
  flex: 1;
`;

const StyledDilevery = styled(atoms.Button)`
  flex: 1;
`;
