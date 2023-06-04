import React from "react";
import Header from "../../components/LandingPage/header";
import Hero from "../../components/LandingPage/hero";
import Features from "../../components/LandingPage/features";
import MoreAboutUs from "../../components/LandingPage/moreAboutUs";
import Footer from "../../components/LandingPage/footer";
import "typeface-roboto";

const landingPage = () => {
  return (
    <div className="bg-landing-primary px-[50px] min-h-screen">
      <Header />
      <Hero />
      <Features />
      <MoreAboutUs />
      <Footer />
    </div>
  );
};

export default landingPage;
