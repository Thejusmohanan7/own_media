import React from 'react'
import HeroSection from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import Consultation from '@/components/plan'
import TeamSection from '@/components/team'
import Sample1 from '@/components/sample1'
import Sample3 from '@/components/sample3'

function page() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Services/>
      <Portfolio/>
      <Sample1/>
      <Sample3/>
      <TeamSection/>
      <Consultation/>
    </div>
  )
}

export default page
