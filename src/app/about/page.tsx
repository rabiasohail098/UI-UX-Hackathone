"use client"
import React from 'react'
import Aboutus from './aboutus'
import TeamMember from './team'
import Testimonial1 from './testimonial'
import Foodmenu from './foodmenu'
import CommentSection from './comment'

const page = () => {
  return (
    <div>
      <Aboutus/>
  <TeamMember/>
  <Testimonial1/>
  <Foodmenu/>
      <CommentSection/>
    </div>
  )
}

export default page