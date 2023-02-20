import React from 'react';
import {IoIosArrowBack} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { roomActions } from '../../store/roomSlice';
import { tournamentActions } from '../../store/tournamentSlice';
import TournamentDashboard from './TournamentDashboard';

const Tournament = () => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    console.log(data);
    const goback = () => {
        dispatch(tournamentActions.clearInfo());
        dispatch(roomActions.toggleTournament())
    }
    return (
        <div className='bg-[#1A1C20] h-full flex items-center justify-center'>
            <div className='h-fit w-[500px] bg-[black] text-white-100 p-5 rounded-xl'>
                <div className='flex items-center text-[#5D5FEF] ml-3 mb-5'>
                    <IoIosArrowBack className='text-[28px] mr-2'/>
                    <div className=' hover:underline cursor-pointer' onClick={() => {goback()}}>
                        back to room
                    </div>
                </div>
                <div className='font-medium text-[28px] text-center mb-8'>
                    Create a Tournament
                </div>
                <div className='mx-11 my-5'>
                    <input type="text" placeholder='Tournament title' 
                    className='bg-[black] border-gray-600 border-[1px] p-2 w-full'
                    onChange={(e) => {dispatch(tournamentActions.titleAdded(e.target.value))}}/>
                </div>
                <div className='mx-11 flex justify-between my-5'>
                    <div>
                        <div className='text-gray-600'>From</div>
                        <input type="date" className='bg-[black] border-gray-600 border-[1px] p-2'
                        onChange={(e) => {dispatch(tournamentActions.fromAdded(e.target.value))}} />
                    </div>
                    <div>
                        <div className='text-gray-600'>To</div>
                        <input type="date" className='bg-[black] border-gray-600 border-[1px] p-2'
                        onChange={(e) => {dispatch(tournamentActions.toAdded(e.target.value))}} />
                    </div>                    
                </div>
                <div className='mx-11 my-5'>
                    <input type="text" placeholder='Venue'
                    className='bg-[black] border-gray-600 border-[1px] p-2 my-5 w-full'
                    onChange={(e) => {dispatch(tournamentActions.venueAdded(e.target.value))}}/>
                </div>
                <div className='text-gray-600 mx-11 my-5'>
                    * All information can be changed later
                </div>
                <div className='ml-[80%] my-3'>
                    <button className='bg-[#5D5FEF] hover:bg-blue-100 bg-opacity-50 shadow-md text-gray-200 font-medium text-[16px] px-3 py-1 mr-5 rounded-xl'>
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tournament;