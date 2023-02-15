import React from 'react';
import SingleFollow from './SingleFollow';
import {AiOutlineLeft} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { headerActions } from '../../../../store/headerSlice';

const FollowRequests = () => {
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(headerActions.toggleFollowRequests());
    }
    return (
        <div className='absolute top-[100px] right-[100px] bg-gray-600 bg-opacity-50 text-white-100 w-[350px] h-[500px] overflow-y-scroll p-5'>
            <div className='flex items-center font-medium mb-3'>
                <div className='cursor-pointer hover:text-blue-60' onClick={() => {toggle()}}>
                    <AiOutlineLeft />
                </div>
                <div className='ml-[80px]'>
                    Follow Requests
                </div>
            </div>
            <div className='w-full h-[1px] bg-gray-600'>

            </div>
            <SingleFollow />
            <SingleFollow />
            <SingleFollow />
        </div>
    );
};

export default FollowRequests;