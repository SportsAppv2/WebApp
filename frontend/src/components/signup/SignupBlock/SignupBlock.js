import React from "react";
import AuthBlock from "../authModels/AuthBlock";
import TextBox from "../TextBox/TextBox";
import FacebookLogo from "../../../assets/iconFb1.svg";
import GoogleLogo from "../../../assets/iconGoogle1.svg";
import logo from "../../../assets/iconLogo.svg";

const SignupBlock = () => {
  return (
    <div className="bg-[black] w-[80vw] h-[620px] md:w-[500px] rounded-lg drop-shadow-xl border-2 md:border-0 border-gray-500 text-white-100 m-auto p-6">
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
        <div className="head font-medium leading-tight text-4xl text-center mt-4">
          Sign up
        </div>
        {/* <div className="signupOptions">
          <AuthBlock
            name="Google"
            color="bg-[#DB4437]"
            hoverColor="hover:bg-[#df584d]"
            icon={GoogleLogo}
          />
          <AuthBlock
            name="Facebook"
            color="bg-[#3278BA]"
            hoverColor="hover:bg-[#4f91d0]"
            icon={FacebookLogo}
          />
        </div> */}
        <div className="otherLoginLogos w-fit m-auto pt-2 mt-2">
            <button className="flex items-center w-64 bg-white-100 hover:bg-gray-400 text-[#000000] font-medium text-sm rounded-3xl mb-4">
              <img src={GoogleLogo} className="authLogo m-1 mr-4" alt="" />
              Sign in with Google              
            </button>
            <button className="flex items-center w-64 bg-white-100 hover:bg-gray-400 text-[#000000] font-medium text-sm rounded-3xl">
              <img src={FacebookLogo} className="authLogo m-1 mr-4" alt="" />
              Sign in with Facebook
            </button>                        
        </div>
        {/* <div className="or ">
          <div className="flex items-center justify-around">
            <div className="hr w-5/12 h-fit bg-gray-500">
              <div className="h-[2px]"></div>
            </div>
            <div className="mx-2">OR</div>
            <div className="hr">
              <hr />
            </div>
            <div className="hr w-5/12 h-fit bg-gray-500">
              <div className="h-[2px]"></div>
            </div>
          </div>
        </div> */}
        <div className="flex items-center mt-2">
            <hr className="w-36 h-[1px] bg-gray-600 border-none"/>
            <div className="otherLoginTxt w-fit m-auto">
              or
            </div>
            <hr className="w-36 h-[1px] bg-gray-600 border-none"/>
        </div> 
        <div className="fields">
          <div className="flex justify-between">
            <TextBox width="w-[45%]" for="First Name" type="text" />
            <TextBox width="w-[45%]" for="Last Name" type="text" />
          </div>
          <div className="">
            <TextBox width="w-[100%]" for="Email" type="email" />
          </div>
          <div className="">
            <TextBox width="w-[100%]" for="Password" type="password" />
          </div>
          <div className="">
            <TextBox width="w-[100%]" for="Retype Password" type="password" />
          </div>
          {/* <div className="btn pt-8">
            <button className="w-full bg-green-60 hover:bg-green-70 text-gray-100 font-medium text-xl pb-1 rounded-lg">
              Sign Up
            </button>
          </div> */}
          <div className="btn pt-6">
            <button
              className="w-64 bg-white-100 hover:bg-gray-400 text-[#000000] font-medium text-xl pb-1 rounded-2xl ml-10"
            >
              Sign up
            </button>
          </div>
          {/* <div className="loginOptn pt-5">
            <div className="">
              <div className="loginTxt w-fit m-auto">
                <span>Already have an account?</span>
                <span className="pl-1 font-medium cursor-pointer hover:text-gray-600">
                  Log in
                </span>
              </div>
            </div>
          </div> */}
          <div className="loginOptn pt-5">
            <div className="">
              <div className="loginTxt w-fit m-auto">
                <span className="text-gray-600">Already have an account?</span>
                <span className="pl-1 font-medium cursor-pointer text-[#5D5FEF] hover:underline">
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
