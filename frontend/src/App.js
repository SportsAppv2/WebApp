import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/landingPage.js";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Setup from "./pages/Setup/Setup.js";
import Home from "./pages/Home/Home.js";
import Room from "./pages/Room/Room.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/landing"
          element={<LandingPage />}
          key="route-landing-page"
        />
        <Route path="/login" element={<Login />} key="route-login-page" />
        <Route path="/signup" element={<Signup />} key="route-signup-page" />
        <Route path="/setup" element={<Setup />} key="route-setup-page" />
        <Route path="/home/*" element={<Home />} key="route-home-page" />
        {/* <Route path="/home/room/" element={<Room />} key="route-room-page" /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
