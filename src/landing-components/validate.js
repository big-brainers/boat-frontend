export default function validate(values) {
  let errors = {}

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more'
  }

  if (!values.passconfirm) {
    errors.passconfirm = 'Password is required'
  } else if (values.passconfirm !== values.password) {
    errors.passconfirm = 'Passwords do not match'
  }
  return errors
}