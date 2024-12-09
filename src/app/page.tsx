import React from 'react'
import Hero from './components/hero'
import Hero1 from './components/hero1'
import Hero2 from './components/hero2'
import Hero4 from './components/hero4'
import FromMenu from './components/frommenu'
import Meetchef from './components/meetchef'
import Testimonials from './components/testimonials'
import Hero5 from './components/hero5'
import Hero6 from './components/hero6'
import TeamMember from './about/team'


const page = () => {
  return (
    <div>
      <Hero/>
      <Hero1/>
      <Hero2/>
      
      <Hero4/>
    <FromMenu/>
    <Meetchef/>
   <Testimonials/>
   <Hero5/>
   <Hero6/>
   
    </div>
  )
}

export default page