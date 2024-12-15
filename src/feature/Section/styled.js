import styled from "styled-components";

export const SectionStyled = styled.section`
  margin-top: 72px;
  margin-bottom: 72px;
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  width: 1216px;
  border-radius: 4px;
  padding-bottom: 32px;
`;

export const Header = styled.h2`
  font-weigth: 900;
  color: ${({theme})=>theme.colors.sectionHeader};
  font-size: 30px;
  line-height: 1.21;
  letter-spacing: 2px;
  margin-left: 32px;
  padding-top: 32px;
  margin-bottom: 0;
`;

export const Divider = styled.div`
  width: 95%;
  height: 1px;
  background-color: #d1d5da4d;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 32px;
`;
