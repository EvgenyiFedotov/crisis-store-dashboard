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
  background-color: ${getThemeValue(({ colors }) => colors.primary)};
  color: ${getThemeValue(({ colors }) => colors.text)};
`;

const info = css`
  background-color: ${getThemeValue(({ colors }) => colors.info)};
  color: ${getThemeValue(({ colors }) => colors.text)};
`;

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
  border-radius: ${getThemeValue("borderRadius")}px;
  outline: none;
  padding: 4px 8px;
  height: 30px;
  cursor: pointer;

${disabled}
  ${getSize({ small, large })}
  ${getColorByType({ primary, info })}
`;