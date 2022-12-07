import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../../theme/AnimationVariants';
import { Link } from 'react-router-dom';
import { CgMail } from 'react-icons/cg';
import './EmailButton.css';

const EmailButton = () => {
  return (
    <Link className="email_container" to="/contact">
      <motion.div
        className="gmailbuttoncontainer"
        variants={FadeIn('up')}
        initial="hidden"
        animate="visible"
      >
        
          <div className="icon_container">
            <CgMail className="mail_icon" />
          </div>
          <div className="mail_container">
            <span className="mail">gordon@clouddevg.io</span>
          </div>
        
      </motion.div>
    </Link>
  )
}
export default EmailButton;
