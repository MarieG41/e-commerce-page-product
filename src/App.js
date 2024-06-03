import './App.css';
import Header from './Header';
import PageContent from './PageContent';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Header counter={counter} setCounter={setCounter}/>
      <PageContent counter={counter} setCounter={setCounter}/>
    </div>
  );
}

export default App;
