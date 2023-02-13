import React from 'react';
import {MdSportsCricket} from 'react-icons/md';
import {IoIosArrowForward} from 'react-icons/io'

const Categories = () => {
    return (
        <div className='h-[150px] overflow-y-scroll mt-2 relative'>
            <div className='flex items-center text-white-100 border-gray-600 border-[1px] text-[20px] p-2'>
                <MdSportsCricket className='mx-2'/>
                <div className='mx-5'>
                    Cricket
                </div>
                <IoIosArrowForward className='absolute right-[20px]'/>
            </div>
            <div className='flex items-center text-white-100 border-gray-600 border-[1px] text-[20px] p-2'>
                <MdSportsCricket className='mx-2'/>
                <div className='mx-5'>
                    Football
                </div>
                <IoIosArrowForward className='absolute right-[20px]'/>
            </div>
            <div className='flex items-center text-white-100 border-gray-600 border-[1px] text-[20px] p-2'>
                <MdSportsCricket className='mx-2'/>
                <div className='mx-5'>
                    Swimming
                </div>
                <IoIosArrowForward className='absolute right-[20px]'/>
            </div>
            <div className='flex items-center text-white-100 border-gray-600 border-[1px] text-[20px] p-2'>
                <MdSportsCricket className='mx-2'/>
                <div className='mx-5'>
                    Basketball
                </div>
                <IoIosArrowForward className='absolute right-[20px]'/>
            </div>
            <div className='flex items-center text-white-100 border-gray-600 border-[1px] text-[20px] p-2'>
                <MdSportsCricket className='mx-2'/>
                <div className='mx-5'>
                    Lawn Tennis
                </div>
                <IoIosArrowForward className='absolute right-[20px]'/>
            </div>
        </div>
    );
};

export default Categories;