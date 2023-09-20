import { createRoot } from 'react-dom/client';
import { Gifs } from './src/Gifs';

function App() {
  return (
    <>
      <Gifs></Gifs>
    </>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);