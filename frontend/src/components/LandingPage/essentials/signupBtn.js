import React from "react";
import { Link } from "react-router-dom";

const SignupBtn = (props) => {
  return (
    <Link to={"/signup"}>
      <div className="bg-gray-200 motion-safe:animate-pulse rounded-3xl shadow-lg font-semibold text-[24px] px-5 py-1 hover:bg-gray-300 transition-all cursor-pointer">
        Sign up
      </div>
    </Link>
  );
};

export default SignupBtn;
