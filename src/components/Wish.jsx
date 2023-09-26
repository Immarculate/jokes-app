import React from 'react';
import { Avatar } from '@mui/material';
import './First.css'

function Wish() {
  return (
    <div className="f-img-div">
        <div className="txt-br-div">
          <div className="txt-div">
            <div className="an-img">
              <Avatar className='an-img'/>
              <h2>the George</h2>
            </div>
            <div className="sp-div">
              <h4>
              On your birthday may your spirit be enriched in light, love, and hope for a prosperous year ahead.
              </h4>
              <p>
                <h4>
                May you have all the love your heart can hold, all the happiness a day can bring, and all the blessings a life can unfold. Happy birthday!
                </h4>
              </p>
            </div>
          </div>
        </div>
           <hr />
        <div className="txt-br-div">
          <div className="txt-div">
            <div className="pic-div">
              <Avatar />
              <h2>Mummy</h2>
            </div>
            <div className="sp-div">
              <h4>
              Today marks one small milestone in the beautiful journey that is your life. May you continue to be blessed and follow
               your goals and ambitions to success!,      
              </h4>
              <p>
                <h4>
                  Put God first and put God in all,and you will continue to be blessed.
                  happy birthday moyin.
                </h4>
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="txt-br-div">
          <div className="txt-div">
            <div className="">
              <Avatar />
              <h2>rat</h2>
            </div>
            <div className="sp-div">
              <h4>
              Another birthday means your life journey is incomplete, may your path be paved with success and guided by love. Best wishes, my friend.
              </h4>
              <p>Happy Birthday</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Wish