import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import './ContactModal.css';

function ContactModal() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 50 })
  }, [])

  return (
    <div className="home_contact">
      <div className="home_contact_text" data-aos="fade-up">
        I'd love to build something with you and your team
      </div>
      <Link to="/contact">
        <button className="home_contact_button" data-aos="fade-up">Hire Me</button>
      </Link>
    </div>
  )
}

export default ContactModal;