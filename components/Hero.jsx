import React from "react";
import Header from "./Header";
import HeroBody from "./HeroBody";

export default function Hero({ navData, heroData }) {
  return (
    <>
      <section 
      className="bg-primary min-h-screen">
        <div className="container mx-auto relative min-h-screen">
          <Header navData={navData} heroData={heroData}></Header>
          <HeroBody heroData={heroData}></HeroBody>
        </div>
      </section>
    
    </>
  );
}
