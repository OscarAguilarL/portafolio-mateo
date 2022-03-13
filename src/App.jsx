import Header from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Wrapper } from './components/Wrapper';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Hero />
      </Wrapper>
      <Projects />
    </>
  );
}

export default App;
