import styled, { css } from "styled-components";

export const Caption = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 1.21;
  margin-top: 12px;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.textBlack};

  ${({ $footer }) =>
    $footer &&
    css`
      font-size: 32px;
      margin: 24px 0;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 22px;
    margin-top: 8px;
    margin-bottom: 16px;

    ${({ $footer }) =>
      $footer &&
      css`
        font-size: 18px;
        margin: 12px 0;
      `}
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 56px;
  color: ${({ theme }) => theme.colors.textSecondary};

  ${({ $footer }) =>
    $footer &&
    css`
      color: ${({ theme }) => theme.colors.textBlack};
    `};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
    line-height: 1.4;
    margin-bottom: 40px;
  }
`;
