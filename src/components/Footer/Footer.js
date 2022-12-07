import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiGmail, SiGooglecloud, SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const [focused, setFocused] = useState(null);

  let socialTags = [
    { id: 1, tag: SiGithub, text: 'GitHub', link: 'https://github.com/CloudDevG'},
    { id: 2, tag: FaLinkedinIn, text: 'LinkedIn', link: 'https://www.linkedin.com/in/clouddevg/' },
  ];
  let googleTags = [
    { id: 1, tag: SiGmail, text: 'Gmail', link: 'mailto:gordon@clouddevg.io' },
    { id: 2, tag: SiGooglecloud, text: 'GCP Directory', link: 'https://bit.ly/cdgGCPDIR' },
  ];

  return (
    <main className="footer">
      <section>
        {socialTags.map((tag) => {
          return (
            <a key={tag.id} href={tag.link} target="_blank" rel='noreferrer' className='footer-link'>
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
            </a>
          )
        })}
      </section>
      <div className="center">
        <span>Cloud<span className="footer-title-text">DevG</span></span>
      </div>
      <section>
        {googleTags.map((tag) => {
          return (
            <a key={tag.id}href={tag.link} target="_blank" rel='noreferrer' className='footer-link'>
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
            </a>
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
