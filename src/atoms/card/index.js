import styled, { css } from "styled-components";
import { Column, Row } from "../";
import { getStep, tv, getPadding, getMargin, getHover } from "../../lib/styled";

const container = {
  width: getStep(12),
  backgroundColor: tv("colors.packageCard.background"),
  borderRadius: tv("borderRadius"),
  borderColor: tv("colors.packageCard.border"),
  hover: {
    backgroundColor: tv("colors.packageCard.hover.background"),
  },
};

const containerHover = css`
  background-color: ${container.hover.backgroundColor};
  cursor: pointer;
`;

const Container = styled(Column)`
  position: relative;
  text-align: left;
  width: ${container.width};
  border-radius: ${container.borderRadius}px;
  background-color: ${container.backgroundColor};
  border: 1px solid ${container.borderColor};

  ${getPadding([1])};
  ${getMargin([0, 0, 2, 0])}
  ${getHover(containerHover)}
`;

const RowInfo = styled(Row)`
  justify-content: space-between;
  width: 100%;
`;

const TitleInfo = styled.div`
  text-align: left;
  font-weight: bold;
`;

const Buttons = styled(Row)`
  position: absolute;
  bottom: -12px;
  right: 12px;
`;

export const Card = { Container, RowInfo, TitleInfo, Buttons };
