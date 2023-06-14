import React from 'react';
import Progressbar from "../../components/setup/Progressbar";
import SetupInput from "../../components/setup/SetupInput";
import { setupActions } from '../../store/setupSlice';
import logo from "../../assets/landing/logo.svg";

const Body = () => {
    return (
        <div className="w-[85%] md:w-fit border-gray-500 shadow-xl h-fit m-auto px-0 md:px-5 py-5 rounded-lg bg-[#000000] text-white-100">
            <div className="icon text-[#A5A6F6] flex gap-5 justify-center mb-[30px]">
                <div className="img items-center">
                    <img src={logo} alt="logo" className="w-[52px] h-auto" />
                </div>
                <div className="text text-[30px] font-bold italic flex items-center"
                onClick={() => { window.location.href = '/'; }}>
                    SportsHub
                </div>
            </div>
            <div className="font-medium leading-tight text-4xl text-center">
                Account Setup
            </div>  
            <Progressbar currentStep={2} />
            <SetupInput />
        </div>
        
    );
};

export default Body;