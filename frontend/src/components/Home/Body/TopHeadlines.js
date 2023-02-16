import React from 'react';

const TopHeadlines = () => {
    return (
        <div className='bg-gray-400 rounded-2xl shadow-2xl w-[500px] p-5'>
            <div className='text-center text-[20px] font-medium'>
                Top Headlines
            </div>
            <div className='mt-5 pl-5'>
                <div className='my-1'>
                    Arsenal win to set up Man City FA Cup clash                           
                </div>
                <div className='my-1'>
                    Ronaldo could face Messi, PSG in Saudi Arabia
                </div>
                <div className='my-1'>
                    Source: Al Nassr want Busquets to join Ronaldo
                </div>
                <div className='my-1'>
                    LeBron sits out loss to Nuggets with sore ankle
                </div>
                <div className='my-1'>
                    Warriors' Curry practices in full, likely back Tue.
                </div>
            </div>
            
        </div>
    );
};

export default TopHeadlines;