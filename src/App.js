import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Joke from './components/Joke';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='joke' element={<Joke />} />
          </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
