import React from 'react'
import ContactHero from './components/ContactHero'
import MultiLocationCards from './components/MultiLocationCards'
import ContactForm from './components/ContactForm'
import InteractiveMap from './components/InteractiveMap'
import OperatingHoursDisplay from './components/OperatingHoursDisplay'
import SocialMediaLinks from './components/SocialMediaLinks'

function Contacts() {
  return (
    <div>
       <ContactHero/>
       <MultiLocationCards/>
       {/* <ContactForm/> */}
       {/* <InteractiveMap/> */}
       <OperatingHoursDisplay/>
       <SocialMediaLinks/>
    </div>
  )
}

export default Contacts