import React from 'react';
import {RxCheck, RxCross2} from 'react-icons/rx';

const SingleRoomRequest = (props) => {
    return (
        <div className='my-4 shadow-2xl bg-gray-600 bg-opacity-20 p-2 rounded-xl'>
            <div className='flex items-center justify-between'>
                <div className='rounded-full h-[40px] w-[40px]'>
                    <img src="http://www.mygoodmorningimages.com/wp-content/uploads/2022/03/4-1.jpg" alt="dp"
                    className='rounded-full object-cover' />
                </div>
                <div className='mx-1 ml-3'>
                    Gauhar Khan
                </div>
                <div className='flex items-center text-[24px] text-[#000000]'>
                    <RxCheck className='mr-2 bg-[#09ac09] rounded-full p-1 cursor-pointer'/>
                    <RxCross2 className='bg-[#c22f2f] rounded-full p-1 cursor-pointer' />
                </div>
            </div> 
        </div>

    );
};

export default SingleRoomRequest;