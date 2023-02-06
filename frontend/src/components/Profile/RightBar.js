import React from 'react';
import {BiGroup} from 'react-icons/bi'
import {MdOutlineAutoGraph} from 'react-icons/md'
import {FaHandshake} from 'react-icons/fa'

const RightBar = () => {
    return (
        <div>
            <div className='analytics h-fit w-[200px] m-10 bg-[#8B8B8D]/50 rounded-2xl'>
                <div className='text-white-100 text-[24px] text-center p-4 border-gray-600 border-b-[2px]'>
                    Analytics
                </div>
                <div className='mx-4'>
                    <div className='text-white-100 flex my-6'>
                        <div>
                            <BiGroup className='text-[32px]' />
                        </div>
                        <div className='text-[18px] pl-4'>
                            36 profile visits
                        </div>
                    </div>
                    <div className='text-white-100 flex my-6'>
                        <div>
                            <MdOutlineAutoGraph className='text-[32px]' />
                        </div>
                        <div className='text-[18px] pl-4'>
                            421 post impressions
                        </div>
                    </div>
                    <div className='text-white-100 flex my-6'>
                        <div>
                            <FaHandshake className='text-[32px]' />
                        </div>
                        <div className='text-[18px] pl-4'>
                            92 engagements
                        </div>
                    </div>
                </div>
                <div>
                    <button className='bg-[#000000] text-[#5D5FEF] w-full p-2 border-gray-600 border-[1px] hover:bg-[#0f0e0e]'>
                        View detailed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightBar;