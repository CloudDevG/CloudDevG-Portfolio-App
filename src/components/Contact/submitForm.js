import { useState, useEffect } from 'react'

const submitForm = (validate, name, email, subject, message) => {
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    let values = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }
    setErrors(validate(values))
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      console.log('Everything is good')
    }
  }, [errors])

  return { handleSubmit, errors }
}

export default submitForm
