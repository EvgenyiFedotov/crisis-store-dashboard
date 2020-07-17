import styled from "styled-components";
import { tv, getStepStatic } from "../../lib/styled";
import { Typography } from "../typography";

const divider = {
  line: tv("colors.onBackground"),
};

export const Divider = styled(Typography.H6)`
  display: flex;
  flex: none;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  color: ${tv("colors.onBackground")};

  &::before {
    content: "";
    display: block;
    width: 5%;
    min-width: 5%;
    border-top: 1px solid ${divider.line};
    margin-right: ${getStepStatic()};
    font-size: ${getStepStatic()};
  }

  &::after {
    content: "";
    display: block;
    width: 95%;
    border-top: 1px solid ${divider.line};
    margin-left: ${getStepStatic()};
  }
`;
