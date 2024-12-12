import styled from "styled-components";

export const Container = styled.div`
max-width: 1920px;
margin: 119px 352px;

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {

margin: 34px 16px;
}
`