import { useSelector } from "react-redux";
import { Button } from "../../../components/Button";
import { repositories } from "../../../api/apiRepos";
import {
  Wrapper,
  Subwrapper,
  Header,
  Paragraph,
  ErrorIconLight,
  ErrorIconDark,
} from "./styled";
import { selectIsDark } from "../../../redux/themeSlice";

export const Error = () => {
  const isDark = useSelector(selectIsDark);
  return (
    <Wrapper>
      <Subwrapper>
        {isDark ? <ErrorIconLight /> : <ErrorIconDark />}
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>Sorry, failed to load GitHub projects.</Paragraph>
        <Paragraph>You can check them directly on GitHub</Paragraph>
        <Button
          href={repositories}
          $gitHubRedirect
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to GitHub
        </Button>
      </Subwrapper>
    </Wrapper>
  );
};
