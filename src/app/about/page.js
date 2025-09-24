import ChooseCourse from '@/components/sections/ChooseCourse'
import AboutHero from '@/components/sections/heros/AboutHero'
import Instructors from '@/components/sections/Instructors'
import Journey from '@/components/sections/Journey'
import OurTeam from '@/components/sections/OurTeam'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutHero />
        <ChooseCourse />
        <Journey />
        {/* <Instructors /> */}
        {/* <OurTeam /> */}
    </div>
  );
};

export default page;
