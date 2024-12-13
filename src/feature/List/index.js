import { ListStyled, Item } from "./styled";

export const List = ({ listOfMetrics }) => (
  <ListStyled>
    {listOfMetrics.map((content, value) => (
      <Item key={value}>{content}</Item>
    ))}
  </ListStyled>
);
