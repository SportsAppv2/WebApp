import React from 'react';

const CommentedPost = () => {
    return (
        <div className='my-4 shadow-2xl bg-gray-600 bg-opacity-20 p-2 rounded-xl'>
            <div className='flex items-center'>
                <div className='rounded-full h-[40px] w-[40px]'>
                    <img src="http://www.mygoodmorningimages.com/wp-content/uploads/2022/03/4-1.jpg" alt="dp"
                    className='rounded-full object-cover' />
                </div>
                <div className='mx-1 ml-3'>
                    john commented on your post
                </div> 
            </div>            
            <div className='text-[14px] mt-2'>
                "Hey I am a big #Madrid fan and hope that I can watch their game live someday. How many of..."
            </div>
        </div>
    );
};

export default CommentedPost;