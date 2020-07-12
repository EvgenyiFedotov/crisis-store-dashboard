import styled, { css } from "styled-components";
import { getSize, getThemeValue } from "../../lib/styled";

const small = css`
  height: 24px;
  font-size: ${getThemeValue("fontSize", "small")}px;
`;

const large = css`
  height: 34px;
  font-size: ${getThemeValue("fontSize", "large")}px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 4px 8px;
  height: 30px;

  ${getSize({ small, large })}
`;
