import { useSelector } from "react-redux";
import { Button } from "../../Button";
import { repositories } from "../repositories";
import {Wrapper, Subwrapper, Header, Paragraph} from "./styled"
import { selectIsDark } from "../../ModeSwitch/themeSlice";
import {ReactComponent as ErrorIconLight} from "../../../images/errorLight.svg";
import {ReactComponent as ErrorIconDark} from "../../../images/errorDark.svg";

export const Error = () => {
    const isDark = useSelector(selectIsDark);
  return (
    <Wrapper>
      <Subwrapper>
        {isDark ? <ErrorIconDark/> : <ErrorIconLight/>}
        <Header>Ooops! Something went wrong</Header>
        <Paragraph>
          Sorry, failed to load GitHub projects. You can check them directly on
          GitHub
        </Paragraph>
      </Subwrapper>
      <Button href={repositories} target="_blank" rel="noopener noreferrer">
        Go to GitHub
      </Button>
    </Wrapper>
  );
};
