import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home">
      {/* <div className="sticker-box">
        <div className="sticker-1">😂</div>
        <div className="sticker-2">🤣</div>
        <div className="sticker-3">😂</div>
        <div className="sticker-4">😅</div>
        <div className="sticker-5">😂</div>
        <div className="sticker-7">🤪</div>
        <div className="sticker-8">😂</div>
        <div className="sticker-9">😂</div>
      </div> */}
      <div className="title-box">
      <motion.div 
    initial={{ x: 1000,  }}
    animate={{ x: 0 }}
    transition={{ duration: 2.5, delay: 0.5 }}
    >
        <h1>Joker 😂 App</h1>
      </motion.div>
      <div>
        <Link to="/joke">
          <button>
            <h2>Read Jokes</h2>
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Home;
