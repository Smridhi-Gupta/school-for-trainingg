import ChooseCourse from '@/components/sections/ChooseCourse'
import AboutHero from '@/components/sections/heros/AboutHero'
import Instructors from '@/components/sections/Instructors'
import OurTeam from '@/components/sections/OurTeam'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutHero />
        <Instructors />
        <OurTeam />
        <ChooseCourse />
    </div>
  )
}

export default page