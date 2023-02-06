import React from 'react';
import {BsCircleFill} from 'react-icons/bs';
const LeftBar = () => {
    return (
        <div className='w-[12%] sticky left-0 top-0'>
            <div className=''>
                <div className='score flex items-center p-5 relative'>
                    <BsCircleFill className='text-[#FFD700] text-[36px]'/>
                    <div className='absolute font-bold left-7'>67</div>
                    <div className='text-white-100 text-[16px] ml-3'>
                        Profile Score
                    </div>
                </div>
                <div className='menu text-white-100 text-[18px]'>
                    <div className='p-4 border-gray-600 border-2 bg-[#8B8B8D]/30 cursor-pointer'>
                        User Profile
                    </div>
                    <div className='p-4 border-gray-600 border-2 hover:bg-[#8B8B8D]/30 cursor-pointer'>
                        My Interests
                    </div>
                    <div className='p-4 border-gray-600 border-2 hover:bg-[#8B8B8D]/30 cursor-pointer'>
                        My Orders
                    </div>
                    <div className='p-4 border-gray-600 border-2 hover:bg-[#8B8B8D]/30 cursor-pointer'>
                        Settings
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;