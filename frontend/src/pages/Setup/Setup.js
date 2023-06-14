import React, { useEffect } from "react";
import "./Setup.css";
import Header from "../../components/setup/Header";
import Body from "../../components/setup/Body";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Setup = () => {
  const data = useSelector((state) => state.setup);
  console.log("setup data ", data);
  const navigate = useNavigate();
  useEffect(() => {
    if (data.setupComplete) {
      console.log("Should Route to a new page now");
      navigate("/home");
    }
  }, [data.setupComplete]);
  return (
    <div className="bg-landing-primary w-screen h-screen md:absolute flex items-center">
      {/* <Header /> */}
      <Body />
    </div>
  );
};

export default Setup;
