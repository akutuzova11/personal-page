import { About } from "./feature/About";
import { mySkills, toLearn } from "./metrics";
import { Section } from "./feature/Section";
import { Footer } from "./feature/Footer";

function App() {
  return (
    <>
      <About />
      <Section title="My skillset includes 🛠️" listOfMetrics={mySkills}/>
      <Section title="What I want to learn next 🚀" listOfMetrics={toLearn}/>
      <Footer/>
    </>
  );
}

export default App;
