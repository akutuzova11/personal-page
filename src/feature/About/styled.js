import styled from "styled-components";

export const AboutStyled = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 72px;
  align-items: center;
  margin-top: -30px;
  margin-bottom: 73px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: -20px;
  }
`;

export const Image = styled.img`
  max-width: 384px;
  max-height: 384px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 256px;
    height: 256px;
    display: flex;
    align-self: start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 132px;
    height: 132px;
  }
`;
