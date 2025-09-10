import React from 'react'
import HeroSection from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import Consultation from '@/components/plan'
import TeamSection from '@/components/team'

function page() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Services/>
      <Portfolio/>
      <TeamSection/>
      <Consultation/>
    </div>
  )
}

export default page
