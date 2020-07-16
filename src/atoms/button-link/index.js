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
    color: ${tv("colors.primary")};
  `,
};

export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 4px 8px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  color: ${tv("colors.text")};

  ${getSize(sizes)}
  ${getColor(colors)}
`;
