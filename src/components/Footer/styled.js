import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      margin-top: 48px;
    }
`;

export const Icons = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
`;
