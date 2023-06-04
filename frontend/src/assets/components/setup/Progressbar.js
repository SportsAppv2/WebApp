import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./setup.css";

const Progressbar = ({ currentStep }) => {
  const currentPage = useSelector((state) => state.setup.currentPage);
  const first = useRef();
  const second = useRef();
  useEffect(() => {
    if (currentPage == 1) {
      second.current.classList.remove("active");
    } else if (currentPage == 2) {
      second.current.classList.add("active");
    }
  }, [currentPage]);
  return (
    <div className="progress-bar flex justify-center mt-5">
      <div className="progress-bar-step mr-3">
        <div className="circle active" ref={first}></div>
      </div>
      <div className="progress-bar-step">
        <div className="circle" ref={second}></div>
      </div>
    </div>
  );
};

export default Progressbar;
