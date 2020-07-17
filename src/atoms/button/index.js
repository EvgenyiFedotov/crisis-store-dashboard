import styled, { css } from "styled-components";
import {
  getSize,
  tv,
  getColor,
  getStepStatic,
  getFocusStatic,
  getOutline,
} from "../../lib/styled";
import { Typography } from "../typography";

const sizes = {
  small: css`
    height: ${getStepStatic(1.5)};
    font-size: ${getStepStatic(0.75)};
  `,
  normal: css`
    height: ${getStepStatic(1.875)};
    font-size: ${getStepStatic()};
  `,
  large: css`
    height: ${getStepStatic(2.25)};
    font-size: ${getStepStatic(1.125)};
  `,
};

const colors = {
  primary: css`
    background-color: ${tv("colors.primary")};
    color: ${tv("colors.onPrimary")};

    ${getFocusStatic(getOutline("colors.primary"))}
  `,
  secondary: css`
    background-color: ${tv("colors.secondary")};
    color: ${tv("colors.onSecondary")};

    ${getFocusStatic(getOutline("colors.secondary"))}
  `,
  error: css`
    background-color: ${tv("colors.error")};
    color: ${tv("colors.onError")};

    ${getFocusStatic(getOutline("colors.error"))}
  `,
  warn: css`
    background-color: ${tv("colors.warn")};
    color: ${tv("colors.onWarn")};

    ${getFocusStatic(getOutline("colors.warn"))}
  `,
};

const disabled = css`
  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
`;

export const Button = styled(Typography.Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${tv("borderRadius")}px;
  outline: none;
  padding: 4px 8px;
  height: 30px;
  cursor: pointer;
  /* outline: 2px solid black; */
  /* box-shadow: 0px 0px 0px 3px #000; */

  ${disabled}
  ${getSize(sizes)}
  ${getColor(colors, "primary")}
`;
