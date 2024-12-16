import styled from "styled-components";

export const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 115px;
  row-gap: 8px;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;

export const Item = styled.li`
position: relative; 
  padding-left: 25px; 
  color: ${({ theme }) => theme.colors.paragraphColor};
  list-style: none;
  line-height: 1.4;

  &::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 9px;
  width: 9px;
  background-color: ${({theme})=> theme.colors.sectionDot};
  border-radius: 50%;
  }
`;
