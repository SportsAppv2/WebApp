import React from 'react';

const NewsCard2 = () => {
    return (
        <div className='mx-11'>
            <div className='flex p-6'>
                <div className='m-2'>
                    <div className='text-white-100 font-medium text-[22px]'>
                        Hockey World Cup: India's key players in quest for glory.
                    </div>
                    <div className='text-gray-400 text-[18px] my-3'>
                        The Indian hockey team which will play in the upcoming 2023 FIH Men's Hockey World Cup in Odisha is not short on talent, nor experience. While a few senior players have retired since...
                    </div>
                    <div className='flex justify-between text-gray-600'>
                        <div>
                            Time
                        </div>
                        <div>
                            Anish Anand | ESPN
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://images.thequint.com/thequint%2F2023-01%2Fafe72bac-fe7f-4f9e-a100-2f311433a8f0%2FScreenshot_2023_01_10_at_6_41_18_PM.png?auto=format%2Ccompress&fmt=webp&width=720" alt="img" 
                    className='w-[400px] h-full'/>
                </div>
            </div>
            <div className='w-full h-[1px] bg-gray-600'></div>
        </div>
    );
};

export default NewsCard2;