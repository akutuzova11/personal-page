import { useDispatch, useSelector } from "react-redux";
import { selectIsDark, toggleDark } from "./themeSlice";
import { ReactComponent as SunLight } from "../../images/sunLight.svg";
import { ReactComponent as SunDark } from "../../images/sunDark.svg";
import { Wrapper, Button, Selector, Caption } from "./styled";

export const ToggleMode = () => {
  const isDark = useSelector(selectIsDark);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Caption>DARK MODE {isDark ? "ON" : "OFF"}</Caption>
      <Button onClick={() => dispatch(toggleDark())}>
        <Selector $round $move={isDark}></Selector>
        <Selector $sun $move={isDark}>
          {isDark ? <SunDark /> : <SunLight />}
        </Selector>
      </Button>
    </Wrapper>
  );
};
