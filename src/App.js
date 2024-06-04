import './App.css';
import Header from './Header';
import LightBox from './LightBox';
import PageContent from './PageContent';
import { useState } from 'react';
import 'react-image-lightbox/style.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <LightBox />
      <Header counter={counter} setCounter={setCounter} />
      <PageContent counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
