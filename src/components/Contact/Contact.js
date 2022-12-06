import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import './Contact.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginTop: theme.spacing(2),
  },

}));

function Contact() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      console.log('No Errors Present')
    }
    else {
      console.log('Errors Present')
    }
  }, [errors])

  const handleSuccessAlertClose = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setErrors({});
    setErrorMsg({});
    setOpenSuccess(false);
  };

  const handleErrorAlertClose = () => {
    setErrors({});
    setOpenError(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    let values = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }
    let errors = {};
    if (!values.name) {
      errors.name = 'Name is required'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid'
    }
    if (!values.subject) {
      errors.subject = 'Subject is required'
    }
    if (!values.message) {
      errors.message = 'Message is required'
    }
    setErrors(errors);
    if(Object.keys(errors).length === 0) {
      setErrorMsg({});
      setOpenError(false);
      emailjs.send(
        "service_o67a62c",
        "template_ildl1ia",
        values,
        "iiewH0NyFklzvEG60",
    )
      .then((result) => {
          setLoading(false);
          setOpenSuccess(true);
      }, (error) => {
          setLoading(false);
          setErrorMsg(error.txt);
          setOpenError(true);
          console.log(errorMsg);
      });
    } else {
      setErrorMsg(errors);
      setLoading(false);
      setOpenError(true);
      setErrors({});
    }
  };

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
      className="contact"
    >
      <motion.div variants={animateChild} className="contact_heading">
        <div className="first-contact-title">Let's <span className="second-contact-title">Connect</span></div>
      </motion.div>
      <motion.div variants={animateChild} className="input_container">
        <div className="input_form">
          <div className="input_form_text_container">
            <span className="input_form_text">Name</span>
            {errorMsg.name && (
              <span className="input_form_invalid_text">{errorMsg.name}</span>
            )}
          </div>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
          ></input>
        </div>

        <div className="input_form">
          <div className="input_form_text_container">
            <span className="input_form_text">Email</span>
            {errorMsg.email && (
              <span className="input_form_invalid_text">{errorMsg.email}</span>
            )}
          </div>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
          ></input>
        </div>
        <div className="input_form">
          <div className="input_form_text_container">
            <span className="input_form_text">Subject</span>
            {errorMsg.subject && (
              <span className="input_form_invalid_text">{errorMsg.subject}</span>
            )}
          </div>
          <input
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            value={subject}
          ></input>
        </div>
        <div className="input_form">
          <div className="input_form_text_container">
            <span className="input_form_text">Message</span>
            {errorMsg.message && (
              <span className="input_form_invalid_text">{errorMsg.message}</span>
            )}
          </div>
          <input
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            value={message}
          ></input>
        </div>
        <button className="contact_send" onClick={sendEmail}>
        {loading ? 
            <CircularProgress />
            :
            <>
            Send
            </>
        }
        </button>
        <div className={classes.root}>
        {openSuccess ? 
          <Collapse in={openSuccess}>
            <Alert
              variant="filled" 
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    handleSuccessAlertClose();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle>Success</AlertTitle>
              I'll reach out to the email provided! 
            </Alert>
          </Collapse>
          :
          <></>
        }
        {openError ? 
          <Collapse in={openError}>
            <Alert
              variant="filled" 
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    handleErrorAlertClose();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle>Error</AlertTitle>
              There was a problem with your form submission
            </Alert>
          </Collapse>
          :
          <></>
        }
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Contact;
