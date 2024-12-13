import styled from "styled-components";

export const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 115px;
  row-gap: 8px;
  font-size: 18px;
`;

export const Item = styled.li`
color: ${({theme})=> theme.colors.textSecondary}
`;
