import React from "react";
import Header from "../../components/LandingPage/header";
import Hero from "../../components/LandingPage/hero";
import Features from "../../components/LandingPage/features";
import MoreAboutUs from "../../components/LandingPage/moreAboutUs";
import Footer from "../../components/LandingPage/footer";
import "typeface-roboto";
import { Route, Routes } from "react-router-dom";
import PageInProgress from "../General/PageInProgress";

const landingPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="bg-landing-primary">
              <div className=" min-h-screen max-w-[1400px] mx-auto">
                <Header />
                <Hero />
                <Features />
              </div>
              <MoreAboutUs />
              <Footer />
            </div>
          </>
        }
        key="route-landing-page"
      />
      <Route
        path="/news"
        element={<PageInProgress />}
        key="route-body-page-1"
      />
      <Route
        path="/rooms"
        element={<PageInProgress />}
        key="route-body-page-2"
      />
      <Route
        path="/tournaments"
        element={<PageInProgress />}
        key="route-body-page-3"
      />
      <Route
        path="/shop"
        element={<PageInProgress />}
        key="route-body-page-4"
      />
    </Routes>
  );
};

export default landingPage;
