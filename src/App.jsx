import Header from './components/Header';
import { Hero } from './components/Hero';
import { Wrapper } from './components/Wrapper';

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Hero />
      </Wrapper>
    </div>
  );
}

export default App;
