import React from 'react'
import Advantages from '../components/Advantages'
import Faq from '../components/Faq'
import Feestructure from '../components/feestructure'
import Herosec from '../components/Herosec'
import Maincard from '../components/MainCard'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import SectionHeader from '../components/section-header'
import Testimonial from '../components/Testimonial'
import Footer from './../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosec />
      <Pricing />
      <SectionHeader title="People Who Love Us" />
      <Testimonial />
      <SectionHeader title="The Company advantages" />
      <Advantages />
      <div>
        <SectionHeader title="Fee Structure" />
        <Feestructure />
      </div>
      <div>
        <SectionHeader title="FAQs" />
        <Faq />
      </div>
      <Maincard />
      <Footer />
    </>
  )
}

export default Home
