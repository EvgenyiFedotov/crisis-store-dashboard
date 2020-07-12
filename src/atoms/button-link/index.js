import styled, { css } from "styled-components";
import { getSize, getThemeValue, getColorByType } from "../../lib/styled";

const small = css`
  height: 24px;
  font-size: ${getThemeValue("fontSize", ({ small }) => small)}px;
`;

const large = css`
  height: 34px;
  font-size: ${getThemeValue("fontSize", ({ large }) => large)}px;
`;

const primary = css`
  color: ${getThemeValue(({ colors }) => colors.primary)};
`;

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
  color: ${getThemeValue(({ colors }) => colors.text)};

  ${getSize({ small, large })}
  ${getColorByType({ primary })}
`;
