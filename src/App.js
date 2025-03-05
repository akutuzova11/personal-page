import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { themeDark, themeLight } from "./styles/theme";
import { selectIsDark } from "./redux/themeSlice";
import { ToggleMode } from "./components/ToggleMode";
import { About } from "./features/About";
import { Section } from "./components/Section";
import { mySkills, toLearn } from "./data/metrics";
import { Footer } from "./components/Footer";
import { Portfolio } from "./features/Portfolio";
import { Container } from "./components/Container";

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
