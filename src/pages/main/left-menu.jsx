import * as React from "react";
import * as templates from "../../templates";
import styled from "styled-components";
import { getThemeValue, getPadding, getStep } from "../../lib/styled";
import * as ri from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

export function LeftMenu() {
  return (
    <templates.Column>
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
    </templates.Column>
  );
}

function LeftMenuItem({ icon, title, to = "", value, onClick }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <StyledLeftMenuItem to={to} onClick={onClick} data-active={active}>
      <templates.Row>
        {icon}
        <div>{title}</div>
      </templates.Row>
    </StyledLeftMenuItem>
  );
}

// Styled
const StyledLeftMenuItem = styled(Link)`
  cursor: pointer;
  width: ${getStep(12)};
  ${getPadding([0.5, 1])};
  border: 0;
  border-radius: ${getThemeValue("borderRadius")}px;
  background-color: ${getThemeValue(
    "colors",
    ({ leftMenuItem }) => leftMenuItem.background
  )};
  color: ${getThemeValue("colors", ({ leftMenuItem }) => leftMenuItem.color)};
  text-decoration: none;

  &:hover {
    background-color: ${getThemeValue(
      ({ colors }) => colors.leftMenuItem.hover.background
    )};
    color: ${getThemeValue(({ colors }) => colors.leftMenuItem.hover.color)};
  }

  &[data-active="true"] {
    background-color: ${getThemeValue(
      ({ colors }) => colors.leftMenuItem.active.background
    )};
    color: ${getThemeValue(({ colors }) => colors.leftMenuItem.active.color)};
  }
`;
