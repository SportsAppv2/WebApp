import React from 'react';

const SingleFollow = () => {
    return (
        <div className='my-4 shadow-2xl bg-gray-600 bg-opacity-20 p-2 rounded-xl'>
            <div className='flex items-center'>
                <div className='rounded-full h-[40px] w-[40px]'>
                    <img src="http://www.mygoodmorningimages.com/wp-content/uploads/2022/03/4-1.jpg" alt="dp"
                    className='rounded-full object-cover' />
                </div>
                <div className='mx-1 ml-3'>
                    Gauhar Khan
                </div>
            </div>
            <div className='flex justify-center my-2'>
                <button className='px-3 py-1 text-md  bg-[#5D5FEF] bg-opacity-50 hover:bg-blue-100 text-gray-200  shadow-md rounded-xl mr-3'>
                    Accept
                </button>
                <button className='px-3 py-1 text-md  bg-[#5D5FEF] bg-opacity-50 hover:bg-blue-100 text-gray-200  shadow-md rounded-xl'>
                    Decline
                </button>
            </div> 
        </div>
        
    );
};

export default SingleFollow;