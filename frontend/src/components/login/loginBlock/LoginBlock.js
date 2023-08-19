import React, { useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import "./LoginBlock.css";
import logo from "../../../assets/landing/logo.svg";
import GoogleLogo from "../../../assets/iconGoogle1.svg";
import FbLogo from "../../../assets/iconFb1.svg";
import { fetchData, loginActions } from "../../../store/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const LoginBlock = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login);
  const navigate = useNavigate();
  // console.log(data);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const handleUsernameFocus = () => {
    usernameRef.current.classList.add("focused");
  };
  const handleUsernameBlur = () => {
    usernameRef.current.classList.remove("focused");
  };
  const handlePasswordFocus = () => {
    passwordRef.current.classList.add("focused");
  };
  const handlePasswordBlur = () => {
    passwordRef.current.classList.remove("focused");
  };
  const unmaskPassword = () => {
    passwordRef.current.children[0].type = "text";
    passwordRef.current.children[2].classList.add("hidden");
    passwordRef.current.children[3].classList.remove("hidden");
  };
  const maskPassword = () => {
    passwordRef.current.children[0].type = "password";
    passwordRef.current.children[3].classList.add("hidden");
    passwordRef.current.children[2].classList.remove("hidden");
  };
  const handleTesterLogin = async () => {
    dispatch(loginActions.emailAdded("dhritimandas@gmail.com"));
    dispatch(loginActions.passwordAdded("123123123"));
    dispatch(fetchData());
  };

  return (
    <div className="bg-[black] w-[80vw] h-fit md:w-[500px] rounded-xl drop-shadow-xl border-2 md:border-0 border-gray-500 text-white-100 m-auto p-6">
      <div className="mx-4 my-6 md:mx-14">
        <div className="icon text-[#A5A6F6] flex gap-5 justify-center">
          <div className="img items-center">
            <img src={logo} alt="logo" className="w-[52px] h-auto" />
          </div>
          <div
            className="text text-[30px] font-bold italic flex items-center"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            SportsHub
          </div>
        </div>
        {data.invalid ? (
          <div className="text-[#FF0000] mt-3 text-center">
            {data.errorMessage}
          </div>
        ) : (
          ""
        )}
        <div className="head font-medium leading-tight text-4xl text-center mt-4">
          Log in
        </div>
        <div className="fields pt-9">
          <div className="userName" ref={usernameRef}>
            <input
              type="text"
              placeholder="Username,phone, or email"
              className="inputClass"
              name=""
              id=""
              onChange={(e) =>
                dispatch(loginActions.emailAdded(e.target.value))
              }
              onFocus={handleUsernameFocus}
              onBlur={handleUsernameBlur}
            />
            <FaRegUser className="relative text-[black] top-[-22px] left-[5px] h-[18px] w-auto" />
          </div>
          <div className="passWord relative h-[50px]" ref={passwordRef}>
            <input
              type="password"
              placeholder="Password"
              className="inputClass"
              name=""
              id=""
              onChange={(e) =>
                dispatch(loginActions.passwordAdded(e.target.value))
              }
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
            <RiLockPasswordLine className="relative text-[black] top-[-22px] left-[5px] h-[18px] w-auto" />
            <MdVisibilityOff
              className="absolute top-[-1px] right-[20px] h-[18px] w-auto cursor-pointer"
              onClick={() => {
                unmaskPassword();
              }}
            />
            <MdVisibility
              className="absolute hidden top-[-1px] right-[20px] h-[18px] w-auto cursor-pointer"
              onClick={() => {
                maskPassword();
              }}
            />
          </div>
        </div>
        <div className="forgotPw">
          <div className="text-right font-medium text-[14px] text-[#5D5FEF] hover:cursor-pointer hover:underline">
            Forgot password?
          </div>
        </div>
        <div className="btn flex justify-center pt-12">
          <button
            className="w-64 bg-white-100 hover:bg-gray-400 text-[#000000] font-medium text-xl pb-1 rounded-2xl text-center"
            onClick={() => dispatch(fetchData())}
          >
            Log in
          </button>
        </div>
        {/* <div className="otherLoginup pt-5">
          <div className="flex items-center justify-between">
            <hr className="w-[42%] h-[1px] bg-gray-600 border-none" />
            <div className="otherLoginTxt w-fit m-auto">or</div>
            <hr className="w-[42%] h-[1px] bg-gray-600 border-none" />
          </div>
          <div className="otherLoginLogos w-fit m-auto pt-2">
            <button className="flex items-center w-64 bg-white-100 hover:bg-gray-400 text-[#000000] font-medium text-sm rounded-3xl mb-4">
              <img src={GoogleLogo} className="authLogo m-1 mr-4" alt="" />
              Sign in with Google
            </button>
            <button className="flex items-center w-64 bg-white-100 hover:bg-gray-400 text-[#000000] font-medium text-sm rounded-3xl">
              <img src={FbLogo} className="authLogo m-1 mr-4" alt="" />
              Sign in with Facebook
            </button>
          </div>
        </div> */}
        <div className="loginOptn pt-5">
          <div className="">
            <div className="loginTxt w-fit m-auto">
              <span className="text-gray-600">Don't have an account yet?</span>
              <span
                className="pl-1 font-medium cursor-pointer text-[#5D5FEF] hover:underline"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <div
            className="text-center border-[2px] border-gray-500 px-2 py-1 rounded-3xl w-[300px] cursor-pointer hover:bg-landing-primary"
            onClick={() => {
              handleTesterLogin();
            }}
          >
            Log in directly as a tester
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBlock;
