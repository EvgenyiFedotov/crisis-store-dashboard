import * as React from "react";
import styled from "styled-components";
import { tv, getPadding, getStep } from "../../lib/styled";
import * as ri from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import * as atoms from "../../atoms";

export function LeftMenu() {
  return (
    <atoms.Column>
      <LeftMenuItem
        icon={<ri.RiArchiveLine />}
        title="Packages"
        to="/main/packages"
      />
      <LeftMenuItem
        icon={<ri.RiBillLine />}
        title="Receipts"
        to="/main/receipts"
      />
      <LeftMenuItem
        icon={<ri.RiTruckLine />}
        title="Delivery"
        to="/main/delivery"
      />
      <LeftMenuItem
        icon={<ri.RiCoupon5Line />}
        title="Subscription list"
        to="/main/subscription-list"
      />
      <LeftMenuItem
        icon={<ri.RiWechatLine />}
        title="Support"
        to="/main/support"
      />
      <LeftMenuItem
        icon={<ri.RiSettings2Line />}
        title="Settings"
        to="/main/setting"
      />
      <LeftMenuItem
        icon={<ri.RiLogoutBoxRLine />}
        title="Log out"
        onClick={(event) => {
          event.preventDefault();
          console.log("log-out");
        }}
      />
    </atoms.Column>
  );
}

function LeftMenuItem({ icon, title, to = "", value, onClick }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <StyledLeftMenuItem to={to} onClick={onClick} data-active={active}>
      <atoms.Row>
        {icon}
        <div>{title}</div>
      </atoms.Row>
    </StyledLeftMenuItem>
  );
}

// Styled
const StyledLeftMenuItem = styled(Link)`
  cursor: pointer;
  width: ${getStep(12)};
  ${getPadding([0.5, 1])};
  border: 0;
  border-radius: ${tv("borderRadius")}px;
  background-color: ${tv("colors.leftMenuItem.background")};
  color: ${tv("colors.leftMenuItem.color")};
  text-decoration: none;

  &:hover {
    background-color: ${tv("colors.leftMenuItem.hover.background")};
    color: ${tv("colors.leftMenuItem.hover.color")};
  }

  &[data-active="true"] {
    background-color: ${tv("colors.leftMenuItem.active.background")};
    color: ${tv("colors.leftMenuItem.active.color")};
  }
`;
