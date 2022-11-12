import React from 'react'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Signinform from '../components/SignInForm';

const Authenticator = () => {
  return (
    <>
      <Navbar />
      <Signinform />
      <Footer />
    </>
  )
}

export default Authenticator