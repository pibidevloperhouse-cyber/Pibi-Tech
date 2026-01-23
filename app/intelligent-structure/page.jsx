import HeroSection from "@/components/intelligent-structure/HeroSection";
import InfrastructureSection from "@/components/intelligent-structure/InfrastructureSection";
import MethodologySection from "@/components/intelligent-structure/MethodologySection";
import WhatWeOfferSection from "@/components/intelligent-structure/WhatWeOfferStructure";
import WhyCloudNativeSection from "@/components/intelligent-structure/WhyCloudNativeSection";
import React from "react";

const intelligenceStructure = () => {
  return (
    <div>
      <HeroSection />
      <InfrastructureSection />
      <WhatWeOfferSection />
      <WhyCloudNativeSection />
      <MethodologySection />
    </div>
  );
};

export default intelligenceStructure;
