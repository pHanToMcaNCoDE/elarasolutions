import React from 'react'
import AboutUs from './components/AboutUs'
import Testimonials from '@/components/Testimonials'
import WhyElaraSolutions from '../home/WhyElaraSolutions'
import HumansOfElara from './components/HumansOfElara'
import JoinOurTeam from './components/JoinOurTeam'
import AboutHero from './components/AboutHero'

const page = () => {
  return (
    <main>
        <AboutHero/>
        <AboutUs/>
        <WhyElaraSolutions/>
        <Testimonials/>
        <HumansOfElara/>
        <JoinOurTeam/>
    </main>
  )
}

export default page