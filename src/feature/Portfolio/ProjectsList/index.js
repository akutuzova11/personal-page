import { List, Item, Header, Description, Wrapper, Paragraph, Link } from "./styled";


export const ProjectsList = ({ projects }) => (
  <List>
    {projects.map((project) => (
      <Item key={project.id}>
        <Header></Header>
        <Description></Description>
        <Wrapper>
          <Paragraph>Demo: </Paragraph>
          <Paragraph>Code: </Paragraph>
        </Wrapper>
      </Item>
    ))}
  </List>
);
