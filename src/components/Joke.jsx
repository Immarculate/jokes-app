import { useEffect, useState } from 'react';
import './Joke.css';
import jokes from '../jokes.json';


const Joke = () => {
  const [newJoke, setNewJoke] = useState([]);

  
  const generateNewJoke = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setNewJoke(randomJoke);
  }
  
  useEffect(() => {
    generateNewJoke()
   }, []);

  const changeJoke = (e) => {
    e.preventDefault();
    generateNewJoke();
  }

  return (
    <div className="joke">
      <div className="box">
        <div className="content">
          <h4>{newJoke}</h4>
        </div>
      </div>
      <div className="next-btn">
          <button onClick={changeJoke}>
            <h4>Next</h4>
          </button>
        </div>
      <div>
        <h5>Copyright immaculate@2023</h5>
      </div>
    </div>
  );
};

export default Joke;
