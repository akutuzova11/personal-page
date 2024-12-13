import { Button } from "../../Button";
import { repositories } from "../repositories";
import {Wrapper, Subwrapper, Header, Paragraph} from "./styled"

export const Error = () => {
  return (
    <Wrapper>
      <Subwrapper>
        <Header>Ooops! Something went wrong</Header>
        <Paragraph>
          Sorry, failed to load Github projects. You can check them directly on
          Github
        </Paragraph>
      </Subwrapper>
      <Button href={repositories} target="_blank" rel="noopener noreferrer">
        Go to Github
      </Button>
    </Wrapper>
  );
};
