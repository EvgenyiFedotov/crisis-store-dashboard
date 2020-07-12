import styled from "styled-components";

export const Divider = styled.div`
  display: flex;
  flex: none;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  line-height: 24px;
  white-space: nowrap;
  width: 100%;

  &::before {
    content: "";
    display: block;
    width: 5%;
    min-width: 5%;
    border-top: 1px solid ${({ theme }) => theme.colors.dividerLine};
    margin-right: 16px;
    font-size: 16px;
  }

  &::after {
    content: "";
    display: block;
    width: 95%;
    border-top: 1px solid ${({ theme }) => theme.colors.dividerLine};
    margin-left: 16px;
  }
`;
