import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feedbackActions } from '../../store/feedbackSlice';

const PostBlock = () => {
    const userInfo = useRef();
    const data = useSelector((state) => state.feedback);
    const dispatch = useDispatch();
    return (
        <div className='bg-[#000000] border-gray-600 border-[1px] text-white-100 rounded-2xl p-5 mx-[100px] my-5'>
            <div className='flex mb-3' ref={userInfo}>
                <div className='rounded-full w-[50px] h-[50px] mr-5'>
                    {data.anonymity ? 
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="dp" 
                    className='h-[100%] w-[100%] rounded-full object-cover'/> : 
                    <img src="https://www.whoa.in/download/cristiano-ronaldo-back-view-wallpaper" alt="dp" 
                    className='h-[100%] w-[100%] rounded-full object-cover'/>}                    
                </div>
                <div>
                    <div className='flex mb-1'>
                        <div className='text-white-100 mr-2 font-medium'>
                            {data.anonymity ? "Anonymous User" : "Baibhav Saikia"}
                        </div>
                        <div className='text-gray-600 mr-14 font-medium'>
                            {data.anonymity ? "" : "@hawk123"}
                        </div>
                    </div>
                    <div className='text-[#5D5FEF] italic hover:underline cursor-pointer'
                    onClick={() => {dispatch(feedbackActions.toggleAnonymity())}}>
                        {data.anonymity ? "write nonanonymously" : "write anonymously"}
                    </div>  
                </div>            
            </div>
            <div className=''>                                      
                    <textarea className='bg-gray-600 text-white-30 text-[18px] focus:outline-none px-5 pt-3 w-full h-fit rounded-md shadow-md bg-[transparent]'
                    placeholder='Write your feedback or query'></textarea>
            </div> 
            <div className='ml-[93%] my-3'>
                <button className='bg-[#5D5FEF] hover:bg-blue-100 bg-opacity-50 shadow-md text-gray-200 font-medium text-[16px] px-3 py-1 mr-5 rounded-xl'>
                    Post
                </button>
            </div>
        </div>
    );
};

export default PostBlock;