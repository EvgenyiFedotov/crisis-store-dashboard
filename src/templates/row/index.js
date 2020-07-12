import styled from "styled-components";
import { getStep } from "../../lib/styled";

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: ${getStep()};
  }
`;
