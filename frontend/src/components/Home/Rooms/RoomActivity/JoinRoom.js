import React from 'react';
import Header from './Header';
import Categories  from './Categories.js';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from '../../../../store/homeSlice';

const JoinRoom = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.home)
    const toggle = () => {        
        dispatch(homeActions.pageChanged(2));
    }
    return (        
        <div>
            <Header mainHeader="Join a room" subHeader="A room is a place where you can engage in discussions, meetings and conversations with people having similar interests and hang out with them."/>
            <div className="h-[32px] text-center mt-8">
                <input
                type="text"
                placeholder="Search for a room"
                className="bg-gray-600 w-[300px] text-white-100 px-9 py-1 outline-none shadow-md"
                />
                <AiOutlineSearch className="relative top-[-27px] left-[140px] text-[22px]" />
            </div>
            <div className='text-[#5D5FEF] text-[14px] font-medium text-right mx-8 my-3 cursor-pointer hover:underline'>
                Have an invite link?
            </div>
            <div className='text-gray-600 mx-14 font-medium text-[14px]'>
                SELECT FROM A CATEGORY
                <Categories />
            </div>
            <div className="flex items-center justify-between mx-[20%] my-8">
                <hr className="w-[42%] h-[1px] bg-gray-600 border-none" />
                <div className="otherLoginTxt w-fit text-white-100">or</div>
                <hr className="w-[42%] h-[1px] bg-gray-600 border-none" />
            </div>
            <div className='flex justify-center mb-5'>
                <button className='bg-white-100 font-semibold text-[18px] rounded-2xl p-2 hover:bg-gray-400'
                onClick={() => {toggle()}}
                >
                    Create a room
                </button>
            </div>
        </div>
    );
};

export default JoinRoom;