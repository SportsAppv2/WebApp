import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Input1 from "./Input1";
import Input2 from "./Input2";

const SetupInput = () => {
  const pageNumber = useSelector((state) => state.setup.currentPage);
  const first = useRef();
  const second = useRef();
  useEffect(() => {
    console.log("Page number changed to ", pageNumber);
    if (pageNumber == 1) {
      console.log("First");
      first.current.classList.remove("hidden");
      second.current.classList.add("hidden");
    } else if (pageNumber == 2) {
      console.log("Second");
      first.current.classList.add("hidden");
      second.current.classList.remove("hidden");
    }
  }, [pageNumber]);
  return (
    <div>
      <div ref={first} className="">
        <Input1 className="" />
      </div>
      <div ref={second} className="hidden">
        <Input2 />
      </div>
    </div>
  );
};

export default SetupInput;
