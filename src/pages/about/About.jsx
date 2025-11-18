import React from 'react'
import AboutHero from './components/AboutHero'
import CompanyStory from './components/CompanyStory'
import VisionValues from './components/VisionValues'
import TeamSection from './components/TeamSection'
import TimelineComponent from './components/TimelineComponent'
import CommitmentSection from './components/CommitmentSection'

function About() {
  return (
    <div>
      <AboutHero/>
      <CompanyStory/>
      <VisionValues/>
      <TeamSection/>
      <TimelineComponent/>
      {/* <CommitmentSection/> */}
    </div>
  )
}

export default About