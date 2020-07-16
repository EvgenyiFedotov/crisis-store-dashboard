import * as React from "react";
import * as atoms from "../../atoms";
import styled from "styled-components";
import { tv } from "../../lib/styled";

import { LeftMenu } from "./left-menu";
import { RightContent } from "./right-content";

export function PageMain() {
  return (
    <atoms.Column step={0}>
      <Header />
      <Content />
    </atoms.Column>
  );
}

function Header() {
  return (
    <StyledHeader padding={[1, 1]}>
      <div>
        <b>Crisis Store</b>
      </div>
    </StyledHeader>
  );
}

function Content() {
  return (
    <StyledContent padding={[1, 1]} step={2}>
      <LeftMenu />
      <RightContent />
    </StyledContent>
  );
}

// Styled
const StyledHeader = styled(atoms.Row)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${tv("zIndex.pageMainContent")};
  justify-content: space-between;
  background-color: ${tv("colors.primary")};
`;

const StyledContent = styled(atoms.Row)`
  margin-top: 62px;
  align-items: flex-start;
  flex-wrap: nowrap;
`;
