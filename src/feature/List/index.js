import { ListStyled, Item } from "./styled";

export const List = ({ listOfMetrics }) => (
  <ListStyled>
    {listOfMetrics.map((item, index) => (
      <Item key={index}>{item}</Item>
    ))}
  </ListStyled>
);
