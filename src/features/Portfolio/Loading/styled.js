import styled from "styled-components";
import { ReactComponent as IconDark } from "../../../images/loadingDark.svg";
import { ReactComponent as IconLight } from "../../../images/loadingLight.svg";

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.loadingText};
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin-top: 88px;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
    margin-top: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
    margin-top: 48px;
  }
`;

export const RotatingIcon = styled.div`
  height: 160px;
  width: 160px;
  margin: 0 auto;
  animation: 1s linear normal infinite rotation;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 130px;
    width: 130px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 100px;
    width: 100px;
  }
`;

export const LoadingIconDark = styled(IconDark)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 130px;
    width: 130px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 100px;
    width: 100px;
  }
`;

export const LoadingIconLight = styled(IconLight)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 130px;
    width: 130px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 100px;
    width: 100px;
  }
`;

export const Wrapper = styled.div`
  max-width: 475px;
  margin: auto;
  text-align: center;
`;
