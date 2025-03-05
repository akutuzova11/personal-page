import {
  List,
  Item,
  Header,
  Description,
  Wrapper,
  Paragraph,
  Link,
} from "./styled";

export const ProjectsList = ({ projects }) => (
  <List>
    {projects.map((project) => (
      <Item key={project.id}>
        <Header>{project.name}</Header>
        <Description>{project.description}</Description>
        <Wrapper>
          <Paragraph>
            Demo:{" "}
            <Link
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.homepage}
            </Link>
          </Paragraph>
          <Paragraph>
            Code:{" "}
            <Link
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.html_url}
            </Link>
          </Paragraph>
        </Wrapper>
      </Item>
    ))}
  </List>
);
