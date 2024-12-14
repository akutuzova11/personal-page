import { useDispatch, useSelector } from "react-redux";
import { selectIsDark, toggleDark } from "./themeSlice";
import { ReactComponent as SunLight } from "../../images/sunLight.svg";
import { ReactComponent as SunDark } from "../../images/sunDark.svg";
import {Wrapper, Button, Selector} from "./styled"

export const ModeSwitch = () => {
  const isDark = useSelector(selectIsDark);
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Button onClick={() => dispatch(toggleDark())}>
          <Selector isDark={isDark}></Selector>
          <Selector isDark={isDark}></Selector>
          {isDark ? <SunDark /> : <SunLight />}
        </Button>
      </Wrapper>
    </>
  );
};
