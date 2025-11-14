import React from 'react'
import ProjectsHero from './components/ProjectsHero'
import ProjectFilterTabs from './components/ProjectFilterTabs'
import ProjectGrid from './components/ProjectGrid'
import ProjectCards from './components/ProjectCards'
// import ProjectModal from './components/ProjectModal'

function Projects() {
  return (
    <div>
       <ProjectsHero/>
       <ProjectFilterTabs/>
       <ProjectGrid/>
       <ProjectCards/>
       {/* <ProjectModal/> */}
    </div>
  )
}

export default Projects