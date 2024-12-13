import styled from "styled-components";

export const SectionStyled = styled.section`
  margin-top: 72px;
  margin-bottom: 72px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.h2`
  weigth: 900;
  font-size: 30px;
  line-height: 1.21;
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #d1d5da4d;
  margin: auto;
`;
