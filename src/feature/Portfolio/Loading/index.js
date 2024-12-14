import { useSelector } from "react-redux";
import { Paragraph, RotatingIcon, LoadingIconDark, LoadingIconLight } from "./styled";
import { selectIsDark } from "../../ModeSwitch/themeSlice";

export const Loading = () => {
  const isDark = useSelector(selectIsDark);
  return (
    <>
      <Paragraph>Please wait, projects are being loaded</Paragraph>
      <RotatingIcon>
        {isDark ? <LoadingIconDark /> : <LoadingIconLight />}
      </RotatingIcon>
    </>
  );
};
