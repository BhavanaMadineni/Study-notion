import React from 'react'
import Template from '../components/Template'
import signUpImg from '../assets/signup.png'

const Signup = ({setIsLoggedin}) => {
  return (
    <Template
        title="Join the millions learing to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond"
        desc2= "Education to future-proof your career"
        image={signUpImg}
        formType="signup"
        setIsLoggedin={setIsLoggedin}
    />
  )
}

export default Signup
