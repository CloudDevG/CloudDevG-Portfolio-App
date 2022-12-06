import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FadeinSide,
  ListItem,
  NavbarOpen,
  HamburgerTopLine,
  HamburgerCenterLine,
  HamburgerBottomLine,
} from '../../theme/AnimationVariants';
import { MdHome, MdCode, MdNote, MdContactMail } from 'react-icons/md';
import ShieldLogo from '../../assets/imgs/shield-of-artorius.png';
import './NavBar.css';

function NavBar() {
  const [visible, setVisible] = useState('-120vw')
  const [hamburgerState, setHamburgerState] = useState(true)

  const navbarFunc = () => {
    visible === '-120vw' ? setVisible('0vw') : setVisible('-120vw')
  }

  return (
    <motion.div
      className="navbar_outer"
      variants={FadeinSide()}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar">
        <div className="navbar_first_section">
          <Link
            to="/"
            className="shield_logo"
            onClick={() => {
              setVisible('-120vw')
            }}
          >
            <img src={ShieldLogo} alt="Shield of Artorius"/>
          </Link>
          
          <div
            className="hamburger_outer"
            onClick={() => {
              setHamburgerState(!hamburgerState)
              navbarFunc()
            }}
          >
            <motion.div
              className="hamburger_lines"
              id="line1"
              variants={HamburgerTopLine(hamburgerState)}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div
              className="hamburger_lines"
              variants={HamburgerCenterLine(hamburgerState)}
              id="line2"
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div
              className="hamburger_lines"
              variants={HamburgerBottomLine(hamburgerState)}
              id="line3"
              initial="visible"
              animate="hidden"
            ></motion.div>
          </div>
        </div>

        <Link
          to="/contact"
          className="navbar_second_section"
          onClick={() => {
            setVisible('-120vw')
            setHamburgerState(true)
          }}
        >
          <span className="work_with_me">Contact Me</span>
        </Link>
      </div>
      <motion.ul
        className="navbar_dropdown"
        variants={NavbarOpen(visible)}
        initial="hidden"
        animate="visible"
      >
        <div className="links_outer">
          <motion.div variants={ListItem(visible)}>
            <span><MdHome className="navbar-icon"/></span>
            <Link
              className="link"
              to="/"
              onClick={() => {
                setVisible('-120vw')
                setHamburgerState(!hamburgerState)
              }}
            >
              <li>
                Home
              </li>
            </Link>
          </motion.div>

          <motion.div variants={ListItem(visible)}>
            <span><MdNote className="navbar-icon"/></span>
            <Link
              className="link"
              to="/about"
              onClick={() => {
                setVisible('-120vw')
                setHamburgerState(!hamburgerState)
              }}
            >
              <li>
                About
              </li>
            </Link>
          </motion.div>
        </div>

        <div className="links_outer">
          <motion.div variants={ListItem(visible)}>
            <span><MdCode className="navbar-icon"/></span>
            <Link
              className="link"
              to="/projects"
              onClick={() => {
                setVisible('-120vw')
                setHamburgerState(!hamburgerState)
              }}
            >
              <li>
                Projects
              </li>
            </Link>
          </motion.div>

          <motion.div variants={ListItem(visible)}>
            <span><MdContactMail className="navbar-icon"/></span>
            <Link
              className="link"
              to="/contact"
              onClick={() => {
                setVisible('-120vw')
                setHamburgerState(!hamburgerState)
              }}
            >
              <li>
                Contact
              </li>
            </Link>
          </motion.div>
        </div>
      </motion.ul>
    </motion.div>
  )
}
export default NavBar;
