import { socialMedia } from "../../socialMedia";
import { Loading } from "./Loading";
import { ProjectsList } from "./ProjectsList";
import { Wrapper, Header, Paragraph } from "./styled";
import { useRepositories } from "./useRepositories";
import { Error } from "./Error";
import { IconLink } from "../IconLinks";

export const Portfolio = () => {
  const data = useRepositories();

  const getState = () => {
    if (data.state === "loading") {
      return <Loading />;
    } else if (data.state === "success") {
      return <ProjectsList projects={data.repositoriesData} />;
    } else if (data.state === "error") {
      return <Error />;
    }
  };

  const gitHubSocial = socialMedia.find(
    (socialMedia) => socialMedia.name === "GitHub"
  );

  return (
    <Wrapper>
      <IconLink
        $portfolio
        href={gitHubSocial.url}
        title={gitHubSocial.name}
        target="_blank"
        rel="noopener noreferrer"
      ></IconLink>
      <Header>Portfolio</Header>
      <Paragraph>My recent projects</Paragraph>
      {getState()}
    </Wrapper>
  );
};
