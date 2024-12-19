import styled, { css } from "styled-components";

export const Caption = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.paragraphColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    line-height: 1.3;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 1.21;
  margin-top: 12px;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.title};

  ${({ $footer }) =>
    $footer &&
    css`
      font-size: 32px;
      margin: 24px 0;
    `}

     @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
  font-size: 30px;

  ${({ $footer }) =>
    $footer &&
    css`
      font-size: 22px;
    `}
}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
  font-size: 22px;
  line-height: 1.21;
  margin-top: 8px;
    margin-bottom: 16px;

  ${({ $footer }) =>
    $footer &&
    css`
      font-size: 18px;
      margin: 12px 0;
    `}
}

    a {
    text-decoration: none; 
    color: ${({ theme }) => theme.colors.title}; 
    transition: color 0.5s; 
    
    &:hover {
      color: ${({ theme }) => theme.colors.emailHover};
    }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 22px;
    
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.paragraphColor};

  ${({ $footer }) =>
    $footer &&
    css`
      color: ${({ theme }) => theme.colors.title};
      max-width: 650px;
      margin-bottom: 56px;
      line-height: 1.4;
    `};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 19px;

    ${({ $footer }) =>
      $footer &&
      css`
        font-size: 16px;
        margin-bottom: 40px;
      `};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;

    ${({ $footer }) =>
      $footer &&
      css`
        font-size: 14px;
        margin-bottom: 40px;
      `};
  }
`;
