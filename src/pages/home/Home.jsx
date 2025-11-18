import React from "react";
import Hero from "./components/Hero";
import ServicesOverview from "./components/ServicesOverview";
import StatsHighlights from "./components/StatsHighlights";
import CTABanner from "./components/CTABanner";
import ClientsLogoSlider from "./components/ClientsLogoSlider";



function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview/>
      {/* <StatsHighlights/> */}
      {/* <FeaturedProjectsCarousel/> */}
      {/* <ServiceAreasMap/> */}
      <CTABanner/>
      <ClientsLogoSlider/>
    </div>
  );
}

export default Home;
