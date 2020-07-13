import styled, { css } from "styled-components";
import { Column, Row } from "../";
import {
  getStep,
  getThemeValue,
  getPadding,
  getMargin,
  getHover,
} from "../../lib/styled";

const container = {
  width: getStep(12),
  backgroundColor: getThemeValue(({ colors }) => colors.packageCard.background),
  borderRadius: getThemeValue("borderRadius"),
  borderColor: getThemeValue(({ colors }) => colors.packageCard.border),
  hover: {
    backgroundColor: getThemeValue(
      ({ colors }) => colors.packageCard.hover.background
    ),
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

export const Card = { Container, RowInfo, TitleInfo };
