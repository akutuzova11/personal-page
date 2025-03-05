import styled from "styled-components";

export const SectionStyled = styled.section`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  max-width: 1216px;
  border-radius: 4px;
  margin: 0 auto 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 16px;
    margin: 0 auto 48px;
  }
`;

export const Header = styled.h2`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.sectionHeader};
  font-size: 30px;
  line-height: 1.21;
  letter-spacing: 0.05em;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.dividerColor};
  margin: 15px auto 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 12px;
  }
`;
