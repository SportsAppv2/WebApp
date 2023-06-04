import React from "react";
import { Link } from "react-router-dom";

const SignupBtn = () => {
  return (
    <Link to={"/login"}>
      <div className="bg-gray-200 rounded-3xl shadow-lg text-[28px] font-semibold px-5 py-1 hover:bg-gray-300 transition-all cursor-pointer">
        Sign up
      </div>
    </Link>
  );
};

export default SignupBtn;
