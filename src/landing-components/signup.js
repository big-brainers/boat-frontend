import React, { useState } from 'react'
import SignupFunc from './signupFunc'
import SignIn from './signin'

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitSignup() {
    setIsSubmitted(true)
  }
  return (
    <>
      <div className='signup-container'>
        {!isSubmitted ? (
          <SignupFunc submitSignup={submitSignup} />
        ) : (
          <SignIn />
        )}
      </div>
    </>
  )
}

export default Signup