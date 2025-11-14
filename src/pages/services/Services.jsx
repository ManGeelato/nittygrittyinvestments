import React from "react";
import ServicesHero from "./components/ServicesHero";
import ServiceCategories from "./components/ServiceCategories";
import ServiceBreakdown from "./components/ServiceBreakdown";
import ServiceProcessTimeline from "./components/ServiceProcessTimeline";
import ServiceBenefitsGrid from "./components/ServiceBenefitsGrid";
import FAQAccordion from "./components/FAQAccordion";

function Services() {
  return (
    <div>
      <ServicesHero />
      <ServiceCategories/>
      <ServiceBreakdown/>
      <ServiceProcessTimeline/>
      <ServiceBenefitsGrid/>
      <FAQAccordion/>
    </div>
  );
}

export default Services;
