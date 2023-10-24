import React from "react"
import HomeSection from "../components/HomeSection/Home.jsx"
import AboutTherapySection from "../components/AboutTherapySection/AboutTherapy.jsx"
import FormationSection from "../components/FormationsSection/Formations.jsx"
import SchedulingSection from "../components/SchedulingSection/Scheduling.jsx"
import FooterSection from "../components/Footer/Footer.jsx"
import HeaderSection from "../components/Header/Header.jsx"
import SocialSection from "../components/SocialSection/Social.jsx"

const LandingPage = () => {
  window.addEventListener("scroll", function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
  })
  return(
    <>
      <HeaderSection />
      <HomeSection />
      <AboutTherapySection />
      <FormationSection />
      <SchedulingSection />
      <SocialSection />
      <FooterSection />
    </>
  )
}

export default LandingPage