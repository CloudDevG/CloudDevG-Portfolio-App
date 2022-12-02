import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, FadeInExtreme } from '../../theme/AnimationVariants';
import Typewriter from 'typewriter-effect';
import EmailButton from '../EmailButton/EmailButton';
import './Home.css';

function Home() {
  const typeWriteOptions = {
    strings: ['CloudDevG', 'Full-Stack Dev.', 'GCP Certified A.C.E.', 'Java Dev.', 'React Dev.', 'Spring Dev.', 'Cloud Engineer','Professional Nerd'],
    autoStart: true,
    loop: true,
  }
  return (
    <div className="home_component">
      <motion.div
        className="home_top_container"
        variants={FadeIn('down')}
        initial="hidden"
        animate="visible"
      >
        <div className="first_name">Gordon<span className="last_name">Allen</span></div>
      </motion.div>

      <div className="home_bottom_container">
        <div className="home_text_container">
          <motion.div
            className="home_text_left"
            variants={FadeInExtreme()}
            initial="hidden"
            animate="visible"
          >
            Hello There 🤖
            <br /> I'm Gordon, <br />
            <span className="typing_text">
              <Typewriter options={typeWriteOptions} />
            </span>
          </motion.div>
          <div className="home_text_right"></div>
        </div>
        <EmailButton />
      </div>
    </div>
  )
}

export default Home;
