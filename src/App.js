import './App.css';
import { Layout } from './components/Layout';
import { Carousel } from './components/Carousel';
import { CarouselProvider } from './hooks/useCarousel';

function App() {
  return (
    <CarouselProvider>
      <div className="App">
          <Layout>
            <Carousel />
          </Layout>
      </div>
    </CarouselProvider>
  );
}

export default App;
