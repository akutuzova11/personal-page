import { List } from "../List";
import { Divider, Header, SectionStyled } from "./styled";

export const Section = ({ title, listOfMetrics = [] }) => (
  <SectionStyled>
    <Header>{title}</Header>
    <Divider />
    <List listOfMetrics={listOfMetrics} />
  </SectionStyled>
);
