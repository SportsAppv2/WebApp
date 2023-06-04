import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';
import AddTeam from './AddTeam';
import AddParticipant from './AddParticipant';
import SingleParticipant from './SingleParticipant';

const Participants = () => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    return (
        <div className='bg-[#1A1C20] h-screen w-[100%] flex'>
            <div className='w-[600px]'>
                {Array.from(data.allTeamData).map((value, index) => {
                    return (<SingleParticipant val={value}/>)
                })}
            </div>             
            <div className='bg-[black] text-white-100 w-[300px] h-fit mt-[150px] rounded-2xl p-5 shadow-2xl text-center py-11'>
                <div className='text-[22px] text-[#5D5FEF] cursor-pointer hover:underline'
                onClick={() => {dispatch(tournamentActions.showAddTeam())}}>
                    Add Team
                </div>
                <div className="flex items-center justify-between my-8">
                    <hr className="w-[42%] h-[1px] bg-gray-600 border-none" />
                    <div className="otherLoginTxt w-fit m-auto">or</div>
                    <hr className="w-[42%] h-[1px] bg-gray-600 border-none" />
                </div>
                <div className='text-[22px] text-[#5D5FEF] cursor-pointer hover:underline'
                onClick={() => {dispatch(tournamentActions.showAddParticipant())}}>
                    Add Participant
                </div>
            </div>
            {data.addTeam && <AddTeam />}
            {data.addParticipant && <AddParticipant />}
        </div>
    );
};

export default Participants;