import React, { useEffect, useState } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTop from "../components/scroollUp";
import LanguageSwitcher from "../components/ui/LanguageSwitcher"; // Import your LanguageSwitcher component

import {
  navData as enNavData,
  heroData as enHeroData,
  aboutData as enAboutData,
  servicesData as enServicesData,
  projectsData as enProjectsData,
  testimonialsData as enTestimonialsData,
  footerData as enFooterData,
} from "../data.json";

import {
  navData as arNavData,
  heroData as arHeroData,
  aboutData as arAboutData,
  servicesData as arServicesData,
  projectsData as arProjectsData,
  testimonialsData as arTestimonialsData,
  footerData as arFooterData,
} from "../ardata.json";

export async function getStaticProps() {
  return {
    props: {
      enNavData,
      enHeroData,
      enAboutData,
      enServicesData,
      enProjectsData,
      enTestimonialsData,
      enFooterData,
      arNavData,
      arHeroData,
      arAboutData,
      arServicesData,
      arProjectsData,
      arTestimonialsData,
      arFooterData,
      initialLang: "en", // default language
    },
  };
}

export default function Home({
  enNavData,
  enHeroData,
  enAboutData,
  enServicesData,
  enProjectsData,
  enTestimonialsData,
  enFooterData,
  arNavData,
  arHeroData,
  arAboutData,
  arServicesData,
  arProjectsData,
  arTestimonialsData,
  arFooterData,
  initialLang,
}) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const nav = lang === "ar" ? arNavData : enNavData;
  const hero = lang === "ar" ? arHeroData : enHeroData;
  const about = lang === "ar" ? arAboutData : enAboutData;
  const services = lang === "ar" ? arServicesData : enServicesData;
  const projects = lang === "ar" ? arProjectsData : enProjectsData;
  const testimonials = lang === "ar" ? arTestimonialsData : enTestimonialsData;
  const footer = lang === "ar" ? arFooterData : enFooterData;

  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-gray-50 text-black">
      <Hero navData={nav} heroData={hero}></Hero>
      <LanguageSwitcher currentLang={lang} setLang={setLang} />
      <About aboutData={about}></About>
      <Services servicesData={services}></Services>
      <Projects projectsData={projects}></Projects>
      <Testimonials testimonialsData={testimonials}></Testimonials>
      {/* <Teams teamsData={teams}></Teams> */}
      <ScrollToTop></ScrollToTop>
      <Footer footerData={footer}></Footer>
    </div>
  );
}
