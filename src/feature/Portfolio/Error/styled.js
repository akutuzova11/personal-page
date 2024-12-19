import styled from "styled-components";
import { ReactComponent as IconLight } from "../../../images/errorLight.svg";
import { ReactComponent as IconDark } from "../../../images/errorDark.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 88px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 48px;
  }
`;

export const Subwrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: 2px;
  margin-top: 16px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  letter-spacing: 2px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const ErrorIconLight = styled(IconLight)`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;

export const ErrorIconDark = styled(IconDark)`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;
