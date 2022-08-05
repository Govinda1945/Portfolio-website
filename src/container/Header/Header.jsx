import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';


const scaleVariants = {
  whileInView :{
    scale : [0,1],
    opacity : [0,1],
    transition : {
      duration : 1,
      ease : 'easeInOut'
    }
  }
}


const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x:[-100, 0], opacity:[0,1]}}
        transition={{duration:0.5}}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>

            <div style={{ marginLeft:20}}>
              <h4 className='p-text'>Hello, I am</h4>
              <h1 className='head-text'>Govinda Chastave</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex' style={{marginLeft:50}}>
            <h5 className='p-text'>Computer Engineer 💴</h5>
            <h5 className='p-text'>MERN Stack Developer💲</h5>
            <h5 className='p-text'>FreeLancer💯</h5>
          </div>

        </div>

      </motion.div>

      <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{scale:[0,1]}}
          transition={{duration:1, delayChildren: 'easeInOut'}}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"

        />
      </motion.div>


      <motion.div 
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className = "app__header-circles"
      >
        {[images.cpp, images.react, images.node].map((circle, index) =>(
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');