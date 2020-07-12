import styled from "styled-components";
import { getPadding, getStep } from "../../lib/styled";

export const Column = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  ${getPadding()}

  & > *:not(:last-child) {
    margin-bottom: ${getStep()};
  }
`;
