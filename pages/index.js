import React from 'react'
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
import Faq from '../components/Faq'

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosec />
      <Companymessage />
      <Slicecard />
      <Pricing />
      <SectionHeader title="Send us your love" />
      <Testimonial />
      <div className=''>
        <SectionHeader title="FAQ" />
        <Faq />
      </div>
      <Maincard />
      <Footer />
    </>
  )
}

export default Home

    // <Feestructure />