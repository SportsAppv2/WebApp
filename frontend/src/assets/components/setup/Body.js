import React from 'react';
import Progressbar from "../../components/setup/Progressbar";
import SetupInput from "../../components/setup/SetupInput";
import { setupActions } from '../../store/setupSlice';
import logo from "../../assets/iconLogo.svg";

const Body = () => {
    return (
        <div className="w-[85%] md:w-fit border-gray-500 shadow-xl h-fit m-auto px-0 md:px-5 py-5 rounded-lg bg-[#000000] text-white-100">
            <div className="flex my-4">
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
            <div className="font-medium leading-tight text-4xl text-center">
                Account Setup
            </div>  
            <Progressbar currentStep={2} />
            <SetupInput />
        </div>
        
    );
};

export default Body;