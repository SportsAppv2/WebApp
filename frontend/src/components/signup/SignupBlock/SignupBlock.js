import React from "react";
import AuthBlock from "../authModels/AuthBlock";
import TextBox from "../TextBox/TextBox";
import FacebookLogo from "../../../assets/iconFb1.svg";
import logo from "../../../assets/iconLogo.svg";
import Date from "../DropdownBlocks/Date";
import Month from "../DropdownBlocks/Month";
import Year from "../DropdownBlocks/Year";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignup, signupActions } from "../../../store/signupSlice";
import { useNavigate } from "react-router-dom";
import GoogleSignUp from "./googleSignUp";

const SignupBlock = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.signup);
  const navigate = useNavigate();
  console.log(data);
  const checkPasswordsMatched = () => {
    const password = data.password;
    const retypePassword = data.retypePassword;
    if (password != retypePassword) {
      dispatch(signupActions.invalidEntry(true));
      dispatch(signupActions.setErrorMessage("Passwords doesn't match"));
      return false;
    }
    return true;
  };
  return (
    <div className="bg-[black] w-[80vw] h-fit md:w-[500px] rounded-lg drop-shadow-xl border-2 md:border-0 border-gray-500 text-white-100 m-auto p-6">
      <div className="mx-4 md:mx-14">
        <div className="flex">
          <div className="logoIcon h-auto mr-2 ml-auto">
            <img
              src={logo}
              className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
              alt="Logo"
            />
          </div>
          <div className="logoText h-auto ml-0 mr-auto text-[24px] md:text-[22px]">
            Sports Hub
          </div>
        </div>
        {data.invalid ? (
          <div className="text-[#FF0000] text-center mt-3">
            {data.errorMessage}
          </div>
        ) : (
          ""
        )}
        <div className="head font-medium leading-tight text-4xl text-center mt-4">
          Sign up
        </div>
        <div className="otherLoginLogos w-fit m-auto pt-2 mt-2">
          <GoogleSignUp />
          {/* <button className="flex items-center w-64 bg-white-100 hover:bg-gray-400 text-[#000000] font-medium text-sm rounded-3xl">
            <img src={FacebookLogo} className="authLogo m-1 mr-4" alt="" />
            Sign in with Facebook
          </button> */}
        </div>
        <div className="flex items-center justify-between mt-2">
          <hr className="w-[42%] h-[1px] bg-gray-600 border-none" />
          <div className="otherLoginTxt w-fit m-auto">or</div>
          <hr className="w-[42%] h-[1px] bg-gray-600 border-none" />
        </div>
        <div className="fields">
          <div className="flex justify-between">
            <TextBox
              width="w-[45%]"
              for="First Name"
              type="text"
              dispatcher="firstNameChanged"
            />
            <TextBox
              width="w-[45%]"
              for="Last Name"
              type="text"
              dispatcher="lastNameChanged"
            />
          </div>
          <div className="">
            <TextBox
              width="w-[100%]"
              for="Email"
              type="email"
              dispatcher="emailChanged"
            />
          </div>
          <div className="">
            <div className={`text-gray-500`}>Date of birth</div>
            <div className="flex justify-between">
              <Date />
              <Month />
              <Year />
            </div>
          </div>
          <div className="">
            <TextBox
              width="w-[100%]"
              for="Password"
              type="password"
              dispatcher="passwordChanged"
            />
          </div>
          <div className="">
            <TextBox
              width="w-[100%]"
              for="Retype Password"
              type="password"
              dispatcher="passwordRetyped"
            />
          </div>
          <div className="btn flex justify-center pt-6">
            <button
              className="w-64 bg-white-100 hover:bg-gray-400 text-[#000000] font-medium text-xl pb-1 rounded-2xl text-center"
              onClick={() => {
                if (checkPasswordsMatched() == true) {
                  dispatch(fetchSignup());
                }
              }}
            >
              Sign up
            </button>
          </div>
          <div className="loginOptn pt-5">
            <div className="">
              <div className="loginTxt w-fit m-auto">
                <span className="text-gray-600">Already have an account?</span>
                <span
                  className="pl-1 font-medium cursor-pointer text-[#5D5FEF] hover:underline"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupBlock;
