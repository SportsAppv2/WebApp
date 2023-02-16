import React from 'react';

const NewsCard1 = () => {
    return (
        <div className='w-[500px] relative'>
            <img className='h-[100%]' src="https://basketball.realgm.com/images/nba/4.2/wiretap/photos/2006/Durant_Kevin_bkn_221114.jpg" alt="img" />
            <div className='text-white-100 text-[18px] absolute left-0 bottom-0 p-3 bg-gray-600 bg-opacity-70 cursor-pointer font-medium'>
                Kevin Durant injury: What his MCL sprain means for the Nets' chances at a top-three seed
            </div>
        </div>
    );
};

export default NewsCard1;