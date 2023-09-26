import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Joke from './components/Joke';
import First from './components/First.jsx'; 
import Mine from './components/Mine.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
          <Routes>
            <Route path='home' element={<Home />} />
            <Route path='/' element={<First />} />
            <Route path='joke' element={<Joke />} />
            <Route path='emma' element={<Mine />} />
          </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
