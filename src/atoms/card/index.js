import styled from "styled-components";
import { Column, Row } from "../../templates";
import { getStep, getThemeValue, getPadding } from "../../lib/styled";

const Container = styled(Column)`
  cursor: pointer;
  text-align: left;
  width: ${getStep(12)};
  margin-bottom: ${getStep(1)};
  border-radius: ${getThemeValue("borderRadius")}px;
  background-color: ${getThemeValue(
    ({ colors }) => colors.packageCard.background
  )};
  border: 1px solid;
  border-color: ${getThemeValue(({ colors }) => colors.packageCard.border)};
  ${getPadding([1])};
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
