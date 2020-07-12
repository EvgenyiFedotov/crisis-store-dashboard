import styled from "styled-components";
import { getStep, getPadding, getFlexPosition } from "../../lib/styled";

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${getPadding()}
  ${getFlexPosition()}

  & > *:not(:last-child) {
    margin-right: ${getStep()};
  }
`;
