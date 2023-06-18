import React from 'react';
import SignupBtn from '../essentials/signupBtn';

const More = () => {
    return (
        <div className='bg-[#865DFF] flex flex-col items-center justify-center h-[500px] text-center px-[100px]'>
            <div className='text-[36px] text-gray-300 font-medium'>
                Start Your Sports Journey!!!
            </div>
            <div className='text-[26px] px-[120px] my-14 italic text-gray-300 font-medium'>
                Join the Sports Hub community today and unlock the door to engaging discussions, insightful content, and a vibrant network of sports enthusiasts. Sign up now to access a world of sports conversations at your fingertips.
            </div>
            <SignupBtn />
        </div>
    );
};

export default More;