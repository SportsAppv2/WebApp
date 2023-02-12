import React from 'react';
import ReplyBlock from './ReplyBlock';
import Comments from './Comments';

const CommentBlock = () => {
    return (
        <div className='bg-[#000000] h-fit ml-[70px] mr-8 mb-5'>
            <ReplyBlock />
            <Comments />
        </div>
    );
};

export default CommentBlock;