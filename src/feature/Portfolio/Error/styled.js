import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Subwrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: 2px;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  letter-spacing: 2px;
  margin: 0;
`;
