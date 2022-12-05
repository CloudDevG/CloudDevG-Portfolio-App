export default function validateInfo(values) {
    let errs = {}
    if (!values.name) {
      errs.name = 'Name is required'
    }
    if (!values.email) {
      errs.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errs.email = 'Email address is invalid'
    }
    if (!values.subject) {
      errs.subject = 'Subject is required'
    }
    if (!values.message) {
      errs.message = 'Message is required'
    }
    console.log(errs);
    return errs
  }
  