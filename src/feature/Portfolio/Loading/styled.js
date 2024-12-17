import styled from "styled-components";
import { ReactComponent as IconDark } from "../../../images/loadingDark.svg";

import { ReactComponent as IconLight } from "../../../images/loadingLight.svg";

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.loadingText};
  line-height: 1.4;
  letter-spacing: 1px;
  margin-top: 88px;
  margin-bottom: 48px;
`;

export const RotatingIcon = styled.div`
  height: 160px;
  width: 160px;

  animation: 1s linear normal infinite rotation;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingIconDark = styled(IconDark)``;

export const LoadingIconLight = styled(IconLight)`

`;

export const Wrapper = styled.div`
  max-width: 475px;
  margin: auto;
  text-align: center;
`
