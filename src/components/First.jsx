import React from 'react';
import { motion } from 'framer-motion';
import './First.css';
import omolade from '../images/omolade.png';
import omolade2 from '../images/omolade2.png';
import { Link } from 'react-router-dom';
import Wish from './Wish';

function First() {
  return (
    <div className="first_">
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <motion.h1 className="bth">Happy Birthday</motion.h1>
        <motion.h2>Omolade Joel Moyinoluwa</motion.h2>
        <div className="txt-br-div">
          <div className="txt-div">
            <div className="pic-div">
              <img src={omolade} alt="first-img" className="img-ft" />
            </div>
            <div className="sp-div">
              <h4>
                Today’s a special day because it’s the day you were born, No one
                compares to you, Your smile can light up the darkest room
              </h4>
              <p>
                <h4>
                  Happy birthday to my favorite person in the whole world.
                </h4>
              </p>
            </div>
          </div>
        </div>
        <div className="f-img-div">
          <div className="txt-br-div">
            <div className="txt-div">
              {/* <Avatar sx={{ width: 100, height: 100, margin: 'auto', alignItems: 'center'}}> */}
              <img src={omolade2} alt="first-img" className="an-img" />
              {/* </Avatar> */}
              <div className="sp-div">
                <h4>
                  My prayer is that you get everything you want and more. You
                  deserve it all.
                </h4>
                <h4>
                  I hope today brings you everything you’ve ever wished for or
                  dreamed of because you deserve and more. Happy birthday!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div>
        <div className="f-img-div">
          <Wish />
        </div>
      </div>
      <div>
        <Link to="/emma">
          <button className="btn__">
            <h4>Next page</h4>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default First;
