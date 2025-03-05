import { useSelector } from "react-redux";
import {
  Paragraph,
  RotatingIcon,
  LoadingIconDark,
  LoadingIconLight,
  Wrapper,
} from "./styled";
import { selectIsDark } from "../../../redux/themeSlice";

export const Loading = () => {
  const isDark = useSelector(selectIsDark);

  return (
    <Wrapper>
      <Paragraph>Please wait, projects are being loaded</Paragraph>
      <RotatingIcon>
        {isDark ? <LoadingIconDark /> : <LoadingIconLight />}
      </RotatingIcon>
    </Wrapper>
  );
};
