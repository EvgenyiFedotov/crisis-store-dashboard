import styled, { css } from "styled-components";
import { getSize, tv, getColor } from "../../lib/styled";

const sizes = {
  small: css`
    height: 24px;
    font-size: ${tv("fontSize.small")}px;
  `,
  large: css`
    height: 34px;
    font-size: ${tv("fontSize.large")}px;
  `,
};

const colors = {
  primary: css`
    background-color: ${tv("colors.primary")};
    color: ${tv("colors.text")};
  `,
  info: css`
    background-color: ${tv("colors.info")};
    color: ${tv("colors.text")};
  `,
};

const disabled = css`
  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${tv("borderRadius")}px;
  outline: none;
  padding: 4px 8px;
  height: 30px;
  cursor: pointer;

  ${disabled}
  ${getSize(sizes)}
  ${getColor(colors)}
`;
