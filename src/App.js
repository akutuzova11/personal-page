import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";
import { selectIsDark } from "./feature/ToggleMode/themeSlice";
import { ToggleMode } from "./feature/ToggleMode";
import { About } from "./feature/About";
import { Section } from "./feature/Section";
import { mySkills, toLearn } from "./metrics";
import { Footer } from "./feature/Footer";
import { Portfolio } from "./feature/Portfolio";
import { Container } from "./common/Container";

function App() {
  const isDark = useSelector(selectIsDark);
  const theme = useMemo(() => (isDark ? themeDark : themeLight), [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <ToggleMode />
        <About />
        <Section title="My skillset includes 🛠️" listOfMetrics={mySkills} />
        <Section title="What I want to learn next 🚀" listOfMetrics={toLearn} />
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
