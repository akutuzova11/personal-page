import styled, { css } from "styled-components";

export const Button = styled.a`
  margin-top: 32px;
  height: 49px;
  width: 154px;
  background-color: ${({ theme }) => theme.colors.hireButtonColor};
  border: 1px solid ${({ theme }) => theme.colors.hireButtonBorder};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  line-height: 1.21;
  weigth: 600;
  color: ${({ theme }) => theme.colors.hirebButtonText};
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 24px;
    height: 46px;
    width: 138px;
    font-size: 18px;
    line-height: 1.21;
  }

  ${({ $gitHubRedirect }) =>
    $gitHubRedirect &&
    css`
      width: 168px;
    `};
`;
