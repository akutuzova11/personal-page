import { About } from "./feature/About";
import { mySkills, toLearn } from "./metrics";
import { Section } from "./feature/Section";
import { Footer } from "./feature/Footer";
import { Portfolio } from "./feature/Portfolio";
import { useSelector } from "react-redux";
import { themeDark, themeLight } from "./theme";
import { ThemeProvider } from "styled-components";
import { selectIsDark } from "./feature/ToggleMode/themeSlice";
import { ToggleMode } from "./feature/ToggleMode";
import { Container } from "./common/Container";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const isDark = useSelector(selectIsDark);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <GlobalStyle/>
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
