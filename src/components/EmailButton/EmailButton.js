import React from 'react'
import './EmailButton.css'
import { CgMail } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { FadeIn } from '../../theme/AnimationVariants'

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
        <span className="mail">gordon@elysianarts.org</span>
      </div>
    </motion.div>
  )
}
export default EmailButton
