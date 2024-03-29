import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/landingPage.js";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Setup from "./pages/Setup/Setup.js";
import Home from "./pages/Home/Home.js";
import Room from "./pages/Room/Room.js";
import Otp from "./pages/OTP/Otp.js";
import Profile from "./pages/Profile/Profile.js";
import Feedback from "./pages/Feedback/Feedback.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LandingPage />} key="route-landing-page" />
        <Route path="/login" element={<Login />} key="route-login-page" />
        <Route path="/signup" element={<Signup />} key="route-signup-page" />
        <Route path="/setup" element={<Setup />} key="route-setup-page" />
        <Route path="/home/*" element={<Home />} key="route-home-page" />
        <Route path="/signup/otp" element={<Otp />} key="route-otp-page" />
        <Route
          path="/profile/:user?"
          element={<Profile />}
          key="route-profile-page"
        />
        <Route
          path="/feedback"
          element={<Feedback />}
          key="route-feedback-page"
        />
        {/* <Route path="/home/room/" element={<Room />} key="route-room-page" /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
