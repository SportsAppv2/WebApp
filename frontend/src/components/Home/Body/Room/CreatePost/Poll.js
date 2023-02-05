import React from 'react';
import ChoiceArea from './ChoiceArea';

const Poll = () => {
    return (
        <div className='bg-[#000000] text-white-100'>
            <div className=''>
                Ask a question...
            </div>
            <ChoiceArea />
        </div>
    );
};

export default Poll;