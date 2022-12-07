import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { about_data } from '../../data/aboutData';
import './About.css';


function About() {
  const animateParent = {
    hidden: {},
    visible: { transition: { delay: 2, staggerChildren: 0.7 } },
  };
  const animateChild = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'easeOut', duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={animateParent}
      initial="hidden"
      animate="visible"
      className="about"
    >
      <motion.div variants={animateChild} className="about_heading">
        <div className="first-about-title">About<span className="second-about-title">Me</span></div>
      </motion.div>
      <motion.div variants={animateChild} className="about_container">
      {about_data.map((about) => {
          return (
            <div>
              <h1>{about.title}</h1>
              <h3>{about.line_one}</h3>
              <p>{about.line_two}<span><a className="about_link" href="https://www.linkedin.com/in/clouddevg/" target="_blank" rel='noreferrer'>{about.line_three}</a></span>{about.line_four} {about.line_five}</p>
              <p>{about.line_six}</p>
              <p>{about.line_seven}</p>
              <p>{about.line_eight}<span><Link className="about_link" to="/projects">{about.line_nine}</Link></span>{about.line_ten}</p>
              <p>{about.line_eleven}</p>
            </div>
      )
      })}
      </motion.div>
    </motion.div>
  )
}

export default About;
