import styled from "styled-components";
import { getPadding, getStep } from "../../lib/styled";

export const Column = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  padding: ${getPadding()};

  & > *:not(:last-child) {
    margin-bottom: ${getStep()};
  }
`;
