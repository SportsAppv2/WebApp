import React from 'react';
import ChoiceArea from './ChoiceArea';

const Poll = () => {
    return (
        <div className='bg-[#000000] text-white-100 p-2'>
            <div className=''>
                <input type="text" 
                placeholder='Ask a question...' 
                className='bg-[#000000] text-white-100 w-[90%]'
                />
            </div>
            <ChoiceArea />
            <ChoiceArea />
            <div className=''>
                <button className='bg-[#5D5FEF] bg-opacity-50 hover:bg-blue-100 p-1 rounded-lg my-2 text-white-100 font-medium'>
                    Create Poll
                </button>
            </div>
        </div>
    );
};

export default Poll;