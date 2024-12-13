import { Article, Wrapper, Header, Paragraph } from "./styled";

export const Portfolio = () => {
  return (
    <>
      <Article>
        <Wrapper>
          <IconLink
            $portfolio
            href={xyz}
            title={xyz}
            target="_blank"
            rel="noopener noreferrer"
          ></IconLink>
          <Header>Portfolio</Header>
          <Paragraph>My recent projects</Paragraph>
        </Wrapper>
      </Article>
    </>
  );
};
