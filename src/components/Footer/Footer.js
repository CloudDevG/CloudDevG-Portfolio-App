import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import { SiGmail, SiGooglecloud, SiGithub } from 'react-icons/si';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  const [focused, setFocused] = useState(null);
  let tags = [
    { tag: SiGmail, text: 'Gmail' },
    { tag: SiGithub, text: 'GitHub' },
  ];
  let tags2 = [
    { tag: FaLinkedinIn, text: 'LinkedIn' },
    { tag: SiGooglecloud, text: 'GCP Directory' },
  ];
  return (
    <main className="footer">
      <section>
        {tags.map((tag) => {
          return (
            <div
              onMouseLeave={() => setFocused(null)}
              onFocus={() => setFocused(tag.text)}
              onMouseEnter={() => setFocused(tag.text)}
              className="section"
            >
              <tag.tag className="icons"></tag.tag>
              <span>{tag.text}</span>
              {focused === tag.text ? <BackgroundFocused /> : null}
            </div>
          )
        })}
      </section>
      <div className="center">
        <span>Gordon Allen</span>
      </div>
      <section>
        {tags2.map((tag) => {
          return (
            <div
              onMouseLeave={() => setFocused(null)}
              onFocus={() => setFocused(tag.text)}
              onMouseEnter={() => setFocused(tag.text)}
              className="section"
            >
              <tag.tag className="icons"></tag.tag>
              <span>{tag.text}</span>
              {focused === tag.text ? <BackgroundFocused /> : null}
            </div>
          )
        })}
      </section>
    </main>
  )
}

function BackgroundFocused() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.1,
          layout: {
            duration: 0.2,
            ease: 'easeOut',
          },
        },
      }}
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        background: 'rgba(0, 0, 0, 0.2)',
      }}
      layoutId="highlight"
    />
  )
}

export default Footer;
