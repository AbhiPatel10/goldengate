import React from 'react'
import Advantages from '../components/Advantages'
import Faq from '../components/Faq'
import Faq2 from '../components/Faq2'
// import Feestructure from '../components/feestructure'
import Herosec from '../components/Herosec'
import Maincard from '../components/MainCard'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import SectionHeader from '../components/section-header'
import Testimonial from '../components/Testimonial'
import Footer from './../components/Footer';
import Companymessage from './../components/CompanyMessage';
import Slicecard from '../components/Slicecard'

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosec />
      <Pricing />
      <Companymessage />
      <Slicecard />
      <SectionHeader title="The Company advantages" />
      <Advantages />
      <Faq />
      <Faq2 />
      <SectionHeader title="Send us your love" />
      <Testimonial />
      <Maincard />
      <Footer />
      </>
      )
    }
    
    export default Home
    
    // <Feestructure />