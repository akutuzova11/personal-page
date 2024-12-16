import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.modeButton};
  border: 1px solid ${({ theme }) => theme.colors.modeButtonBorder};
  width: 48px;
  height: 26px;
  border-radius: 46px / 47px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const Caption = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.paragraphColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;

export const Selector = styled.div`
  ${({ $round }) =>
    $round &&
    css`
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.colors.modeRound};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s;
      top: 2px;
      left: 3px;

      ${({ $move }) =>
        $move &&
        css`
          transform: translateX(20px);
        `}
    `}

  ${({ $sun }) =>
    $sun &&
    css`
      position: absolute;
      transition: 0.5s;
      top: 4.5px;

      ${({ $move }) =>
        $move &&
        css`
          transform: translateX(20px);
        `}
    `}
`;
