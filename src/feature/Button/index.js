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
  font-weight: 600;
  color: ${({ theme }) => theme.colors.hirebButtonText};
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: -2px -2px 0px 0px ${({ theme }) => theme.colors.buttonHoverShadow};
  }

  &:active {
    box-shadow: 0px 2px 0px 0px
      ${({ theme }) => theme.colors.buttonActiveShadow} inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 24px;
    height: 46px;
    width: 138px;
    font-size: 18px;
  }

  ${({ $gitHubRedirect }) =>
    $gitHubRedirect &&
    css`
      width: 168px;
    `};
`;
