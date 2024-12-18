import styled from "styled-components";

export const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 115px;
  row-gap: 8px;
  font-size: 18px;
  font-weight: 400;
  margin: 0 auto; 
  max-width: 100%;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
`;

export const Item = styled.li`
  position: relative;
  padding-left: 25px;
  color: ${({ theme }) => theme.colors.paragraphColor};
  list-style: none;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding-left: 14px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 9px;
    width: 9px;
    background-color: ${({ theme }) => theme.colors.sectionDot};
    border-radius: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 6px;
    width: 6px;
  }
  }
`;
