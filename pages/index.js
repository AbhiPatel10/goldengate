import React from 'react'
import Advantages from '../components/Advantages'
import Faq from '../components/Faq'
import Feestructure from '../components/feestructure'
import Herosec from '../components/Herosec'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import SectionHeader from '../components/section-header'

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosec />
      <Pricing />
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
    </>
  )
}

export default Home
