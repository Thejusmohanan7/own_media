import React from 'react'
import HeroSection from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import Consultation from '@/components/plan'
import TeamSection from '@/components/team'
import Sample1 from '@/components/sample1'


function page() {
  return (
    <div>
      <HeroSection/>
      <Services/>
      <About/>
      <Portfolio/>
      <Sample1/>
      <TeamSection/>
      <Consultation/>
    </div>
  )
}

export default page
