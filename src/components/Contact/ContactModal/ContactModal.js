import React, { useEffect } from 'react'
import './ContactModal.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'

function ContactModal() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 100 })
  }, [])

  return (
    <div className="home_contact">
      <div className="home_contact_text" data-aos="fade-up">
        I'd love to make something for you or your company 
      </div>
      <Link to="/contact">
        <button className="home_contact_button">Hire Me</button>
      </Link>
    </div>
  )
}

export default ContactModal