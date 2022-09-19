import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../../theme/AnimationVariants';
import { CgMail } from 'react-icons/cg';
import './EmailButton.css';

const EmailButton = () => {
  return (
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
        <span className="mail">gordon@clouddevg.org</span>
      </div>
    </motion.div>
  )
}
export default EmailButton
