import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';

const GroupOnly = () => {
    const dispatch = useDispatch();
    const submitInfo = () => {
        dispatch(tournamentActions.showGroupOnly());
        dispatch(tournamentActions.showFormat2ndpage());
    }
    return (
        <div className='w-screen h-screen fixed top-0 left-0 bg-gray-20 flex justify-center items-center'>
            <div className='w-[400px] bg-[black] h-fit text-white-100 p-5 rounded-xl px-11' >
                <div className='flex items-center text-[22px]'>
                    <div onClick={() => {dispatch(tournamentActions.showGroupOnly())}}>
                        <IoIosArrowBack className='cursor-pointer hover:text-gray-400' />
                    </div>
                    <div className='text-[20px] font-medium ml-[48px]'>
                         Group phase only
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='text-gray-600'>
                        Number of groups?
                    </div>
                    <input type="number" 
                    className='bg-[black] border-gray-600 border-[1px] w-full p-2 outline-none shadow-md'
                    onChange={(e) => {dispatch(tournamentActions.addNoOfGroups(e.target.value))}}/>
                </div>
                <div className='mt-5'>
                    <div className='text-gray-600'>
                        Number of teams/players per group?
                    </div>
                    <input type="number" 
                    className='bg-[black] border-gray-600 border-[1px] w-full p-2 outline-none shadow-md'
                    onChange={(e) => {dispatch(tournamentActions.addNoOfParticipantPerGroup(e.target.value))}}/>
                </div>
                <div className="flex items-center mt-5">
                        <button
                            className="bg-[#5D5FEF] hover:bg-blue-100 bg-opacity-50 mt-5 flex ml-[110px] shadow-md text-gray-200 font-medium text-lg px-3 py-1 rounded-xl"
                        onClick={() => {submitInfo()}}
                        >
                            Submit
                        </button>
                </div>
            </div>
        </div>
    );
};

export default GroupOnly;