import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.title};
`;

export const Header = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 1.21;
  letter-spacing: 1px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    margin-top: 12px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin-top: 8px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
      margin-top: 16px;
  }
`;
