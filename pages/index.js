import React from 'react'
import Advantages from '../components/Advantages'
import Faq from '../components/Faq'
import Feestructure from '../components/feestructure'
import Herosec from '../components/Herosec'
import Navbar from '../components/Navbar'
import SectionHeader from '../components/section-header'

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosec />
      <SectionHeader title="The Company advantages" />
      <Advantages />
      <div>
        <SectionHeader title="Fee Structure" />
        <Feestructure />
      </div>
      <Faq />
    </>
  )
}
