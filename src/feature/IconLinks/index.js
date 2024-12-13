import styled from "styled-components";

export const IconStyled = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  background-color: #d1d5db; // Example background
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #9ca3af;
  }
`;

