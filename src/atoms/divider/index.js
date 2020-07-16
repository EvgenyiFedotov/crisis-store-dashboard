import styled from "styled-components";
import { tv } from "../../lib/styled";

const divider = {
  line: tv("colors.divider.line"),
};

export const Divider = styled.div`
  display: flex;
  flex: none;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;

  &::before {
    content: "";
    display: block;
    width: 5%;
    min-width: 5%;
    border-top: 1px solid ${divider.line};
    margin-right: 16px;
    font-size: 16px;
  }

  &::after {
    content: "";
    display: block;
    width: 95%;
    border-top: 1px solid ${divider.line};
    margin-left: 16px;
  }
`;
