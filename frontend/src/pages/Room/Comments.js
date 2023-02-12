import React from 'react';
import SingleComment from './SingleComment';

const Comments = () => {
    return (
        <div>
            <SingleComment id="1"/>
            <SingleComment id="2"/>
            <SingleComment id="3"/>
            <SingleComment id="4"/>
            <div className='text-[#5D5FEF] ml-8 mt-5 cursor-pointer hover:underline text-[18px]'>
                view more
            </div>
        </div>
    );
};

export default Comments;