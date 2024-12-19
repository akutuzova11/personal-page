import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../../images/github.svg";

export const IconStyled = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    fill: ${({ theme }) => theme.colors.footerIconColor};

    &:hover {
      fill: ${({ theme }) => theme.colors.iconHover};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;

export const PortfolioLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  transition: background-color 0.3s;

  svg {
    width: 100%;
    height: 100%;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.portfolioIconColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;

export const IconLink = ({ href, title, target, rel }) => (
  <PortfolioLink href={href} title={title} target={target} rel={rel}>
    <GitHubIcon />
  </PortfolioLink>
);
