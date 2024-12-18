import styled from "styled-components";

export const Container = styled.div`
  max-width: 1216px;
  margin: 119px 109px;
  word-wrap: normal;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 34px 16px;
  }
`;
