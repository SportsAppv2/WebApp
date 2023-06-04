import React, { useEffect } from "react";
import Body from "../../components/signup/body/body.js";
import Header from "../../components/login/header/header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.signup);
  const isAuthorized = data.signupAuthorized;
  useEffect(() => {
    if (data.signupAuthorized) {
      navigate("/signup/otp");
    }
  }, [data.signupAuthorized]);
  return (
    <div className="bg-[#1A1C20] h-screen">
      {/* <Header /> */}
      <Body />
    </div>
  );
};

export default Signup;
