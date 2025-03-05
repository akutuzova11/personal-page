import styled from "styled-components";

export const Container = styled.div`
  max-width: 1216px;
  margin: 119px auto;
  word-wrap: normal;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 34px auto;
    padding: 0 16px;
  }
`;
