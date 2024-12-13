import styled from "styled-components";

export const Button = styled.button`
  margin-top: 32px;
  height: 49px;
  width: 154px;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: center;
  font-size: 20px;
  line-height: 1.21;
  weigth: 600;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
margin-top: 24px;
height: 46px;
width: 138px;
font-size: 18px;
line-height: 1.21;
}
`;

